# 🔖 Blog App using NextJs And Appwrite

![logo](https://user-images.githubusercontent.com/47685349/138933572-fd0d2da5-71d7-4648-8c88-063bdac6e5b9.png)

## Screenshot

![screenshotsignup](https://user-images.githubusercontent.com/47685349/138934188-b0962c42-9946-4366-bce3-3fc0dd5646f2.png)

![screenshotlogin](https://user-images.githubusercontent.com/47685349/138934359-b9b07137-2b33-4b15-a032-6e1c413eac34.png)

![screenshothome](https://user-images.githubusercontent.com/47685349/138934552-2640037f-cc77-4445-971c-5f8466ec8e31.png)
## 🎬 Getting Started!

### 🤘 Install Appwrite 
Follow our simple [Installation Guide](https://appwrite.io/docs/installation) to get Appwrite up and running in no time. You can either deploy Appwrite on your local machine or, on any cloud provider of your choice. 
> Note: If you setup Appwrite on your local machine, you will need to create a public IP so that your hosted frontend can access it.
1. Add a new Web App in Appwrite and enter the endpoint of your website (`localhost, <project-name>.vercel.app etc`)
2. Create a new collection with the following properties
* **Rules**
Add the following rules to the collection. 
> Make sure that your key exactly matches the key in the images


<p align="center">
<img src="https://user-images.githubusercontent.com/47685349/139072703-2893bb5d-833b-454b-b1cc-2950991b224e.png" alt="Content Rule" width="400"/>
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/47685349/139072749-0d23b6a6-50a8-45d9-855c-441aaf83cf3d.png" alt="IsComplete Rule" width="400"/>
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/47685349/139072919-223c4ceb-47fa-42f5-93ec-235510007039.png" alt="IsComplete Rule" width="400"/>
</p>

* **Permissions**

Add the following permissions to your collections. These permissions ensure that only registered users can access the collection.

<p align="center">
<img src="https://user-images.githubusercontent.com/47685349/139072970-7523a39b-8ca0-4145-b63a-0be41fe10c08.png" alt="IsComplete Rule" width="400"/>
</p>



### 🚀 Deploy the Front End
You have two options to deploy the front-end and we will cover both of them here. In either case, you will need to fill in these environment variables that help your frontend connect to Appwrite.

* REACT_APP_ENDPOINT - Your Appwrite endpoint
* REACT_APP_PROJECT - Your Appwrite project ID
* REACT_APP_COLLECTION_ID - Your Appwrite collection ID 


### **Run locally**

Follow these instructions to run the demo app locally

```sh
$ git clone https://github.com/alceil/apppwrite-blogapp-with-nextjs
$ cd apppwrite-blogapp-with-nextjs
```


Now fill your environment variables

![image](https://user-images.githubusercontent.com/47685349/138935258-1f4ea81a-5955-4fdb-bf89-3de09a3c438a.png)


Now run the following commands and you should be good to go 💪🏼

```
$ npm install
$ npm run dev
```


## Thanks

Glad to see here! Show some love by [starring](https://github.com/alceil/apppwrite-blogapp-with-nextjs) this repository. 

