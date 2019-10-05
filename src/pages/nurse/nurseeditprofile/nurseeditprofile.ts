import { Component } from '@angular/core';
import { NurseprofilePage } from '../nurseprofile/nurseprofile';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { ToastController, Loading } from 'ionic-angular';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController,Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';

/**
 * Generated class for the NurseeditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-nurseeditprofile',
  templateUrl: 'nurseeditprofile.html',
})
export class NurseeditprofilePage {
  lastImage: string = null;
  loading: Loading;
  public nurse_id:any;
  authForm: FormGroup;
  public firstname:any;
  public lastname:any;
  public workplace:any;
  public Designation:any;
  public filename:any;
  public imgres:any;
  public nursePic:any;
  public defaultPic:any="assets/imgs/profile.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera, private transfer: Transfer, private file: File,
    private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public platform: Platform,
   public loadingCtrl: LoadingController,public formBuilder: FormBuilder,
   public nurseServ:NurseserviceProvider) {
    this.authForm = formBuilder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{1,32}')])],
      lastname: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{1,32}')])],
      workplace: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{1,32}')])],
      Designation: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{1,32}')])]
      
  });
  this.nurse_id = localStorage.getItem('nurse_id');
 
  console.log("nurse id" ,this.nurse_id)
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Updataion failed.'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
  this.nurseServ.nurseGetprofile(this.nurse_id).subscribe(res=>{
    console.log(res);
    this.firstname = res.result.firstname;
    this.lastname = res.result.lastname;
    this.workplace = res.result.workplace;
    this.Designation = res.result.designation;
    this.nursePic  = res.result.image;
    if(this.nursePic=="" || this.nursePic==undefined){
      this.nursePic = this.defaultPic;
    }
  })

    console.log('ionViewDidLoad NurseeditprofilePage');
  }
  onSubmit(value){
 console.log(value);
 this.firstname = value.firstname;
 this.lastname = value.lastname;
 this.workplace = value.workplace;
 this.Designation = value.Designation;
 console.log("file ka name",this.filename);
 if(this.filename==undefined){
  
   this.nurseServ.updateprofile(value,this.nurse_id).subscribe(res=>{
     console.log(res);
     if(res.message=="successfull"){
      this.navCtrl.push(NurseprofilePage);
     }else{
      this.presentLoadingDefault();
     }
   })
 }else{
  this.uploadImage();
 }

  }
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    this.filename = newFileName;
    return newFileName;
  }
   
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
   
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
   
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  public uploadImage() {
    // Destination URL
    var url = "http://www.air.sideworkapps.com/nursingondemand/nursewebservice/user_update";
   
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
   
    // File name only
    var filename = this.lastImage;
   
    var options = {
      fileKey: "image",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'image': this.filename,
            'nurse_id':this.nurse_id,
            'firstname':this.firstname,
            'lastname':this.lastname,
             'workplace':this.workplace,
             'designation':this.Designation}
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
     
      this.imgres = JSON.parse(data.response);
      console.log("pic ka response",this.imgres)
      if(this.imgres.message=="successfull"){
         this.navCtrl.setRoot(NurseprofilePage);
      }
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }

 

}
