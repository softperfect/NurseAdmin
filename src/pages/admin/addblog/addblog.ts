import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {  ActionSheetController, ToastController, Platform, Loading } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AdmindidyouknowPage } from '../admindidyouknow/admindidyouknow';

declare var cordova: any;
/**
 * Generated class for the AddblogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addblog',
  templateUrl: 'addblog.html',
})
export class AddblogPage {
  authForm: FormGroup;
  lastImage: string = null;
  loading: Loading;
  public defaultImage:any="assets/imgs/blog.png";
  public blog_title:any;
  public auther:any;
  public blog_date:any;
  public blog_dec:any;
  public imgres:any;
  public filename:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder:FormBuilder,public loadingCtrl:LoadingController,
     private camera: Camera, private transfer: Transfer,
     private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, public platform: Platform,) {
    this.authForm = formBuilder.group({
      blog_title: [],
      auther: [],
      blog_date: [],
      blog_dec: [],

  });
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please Fill All Details.'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddblogPage');
  }
  upload(value){

    if(value.blog_title=="" || value.blog_title==undefined || value.auther=="" || value.auther == undefined
    || value.blog_date=="" || value.blog_date==undefined || value.blog_dec=="" || value.blog_dec==undefined
    || this.filename=="" || this.filename==undefined){
   this.presentLoadingDefault();
    }else{
      this.auther = value.auther;
      this.blog_date = value.blog_date;
      this.blog_title = value.blog_title;
      this.blog_dec =value.blog_dec;
      console.log(value);
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
    var url = "http://www.air.sideworkapps.com/nursingondemand/adminwebservice/add_new_blog";
   
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
   
    // File name only
    var filename = this.lastImage;
   
    var options = {
      fileKey: "blog_image",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'blog_image': filename,
               'blog_name':this.blog_title,
               'blog_description':this.blog_dec,
               'blog_date':this.blog_date,
                'author_name': this.auther}
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.imgres = JSON.parse(data.response);
      console.log("images response",this.imgres)
      if(this.imgres.message=="successfull"){
        this.navCtrl.setRoot(AdmindidyouknowPage);
      }
     
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }
}
