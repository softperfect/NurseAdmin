import { Component } from '@angular/core';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController,Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ToastController, Loading } from 'ionic-angular';
import { AdminhomePage } from '../adminhome/adminhome';

declare var cordova: any;

/**
 * Generated class for the AdminaccountsettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminaccountsetting',
  templateUrl: 'adminaccountsetting.html',
})
export class AdminaccountsettingPage {
  public admin_id:any;
  authForm: FormGroup;
  public fname:any;
  public lname:any;
  public email:any;
  public mobile:any;
  public lastImage: string = null;
  public loading: Loading;
  public filename:any;
  public imgres:any;
  public userPic:any;
  public defaultPic:any="assets/imgs/profile.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public adminServ:AdminserviceProvider,
    private camera: Camera, private transfer: Transfer, private file: File,
    private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public platform: Platform,
   public loadingCtrl: LoadingController) {
    this.admin_id = localStorage.getItem('admin_id');
    console.log("admin id",this.admin_id);

    this.authForm = formBuilder.group({
      fname: ['', Validators.compose([Validators.pattern('[A-Za-z ]{1,32}') ])],
      lname: ['', Validators.compose([Validators.pattern('[A-Za-z ]{1,32}') ])],
      email: ['', Validators.compose([Validators.required  ])],
      mobile: ['', Validators.compose([Validators.pattern('[0-9]{1,15}'),Validators.minLength(10),Validators.maxLength(10)])],
  });
  this.adminServ.adminGetprofile(this.admin_id).subscribe(res=>{

    if(res.message=="successfull"){
      console.log(res);
      this.fname = res.result.firstname;
      this.lname = res.result.lastname;
      this.email = res.result.email;
      this.mobile = res.result.phone_number;
      this.userPic = res.result.image;
      if(this.userPic==""){
        this.userPic = this.defaultPic;
    }
    }
  })
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please fill all details.'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminaccountsettingPage');
  }

  submit(value){
   this.fname = value.fname;
   this.lname = value.lname;
   this.mobile = value.mobile;
    if(value.fname=="" || value.fname==undefined || value.lname=="" || value.lname==undefined
   || value.mobile=="" || value.mobile==undefined){
    this.presentLoadingDefault();
   }else{
     console.log(value,this.filename);
     if(this.filename==undefined){
     this.adminServ.updateProfile(this.admin_id,value).subscribe(res=>{
       console.log(res);
     })
     }else{
       this.uploadImage();
     }
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
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  public uploadImage() {
    // Destination URL
    var url = "http://www.air.sideworkapps.com/nursingondemand/adminwebservice/user_update";
   
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
   
    // File name only
     this.filename = this.lastImage;
   
    var options = {
      fileKey: "image",
      fileName: this.filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'image': this.filename,
               'admin_id':this.admin_id,
               'firstname':this.fname,
               'lastname':this.lname,
               'phone_number':this.mobile
               }
    };
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
    
      this.imgres = JSON.parse(data.response);
      console.log("response of pic",this.imgres.result);
      if(this.imgres.message=="successfull"){
        this.navCtrl.setRoot(AdminhomePage);
      }else{
        this.presentToast('updation faild! try again');
      }
    
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }

}
