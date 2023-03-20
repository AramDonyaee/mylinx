<template>

    <div class="modal-backdrop">
        <div class="modal relative w-full h-full max-w-2xl md:h-auto rounded-lg">
            <header class="modal-header">
                <slot name="header">
                    Upload your Profile Picture
                </slot>
                <button type="button" class="btn-close" @click="close">
                    x
                </button>
            </header>

            <section class="modal-body">

                <v-card width="auto" v-show="this.image.src">
                    <div class="example">
                        <cropper ref="cropper" :src="image.src" class="example-cropper"
                            :stencil-component="$options.components.CircleStencil" />
                        <div class="button-wrapper">
                            <span class="button" @click="crop">Crop and Save</span>
                        </div>
                    </div>
                </v-card>

                <slot name="body">
                    <div class="flex items-center justify-center w-full " v-show="!this.image.src">
                        
                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-46 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6 "
                                @click="$refs.file.click()">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                    </path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                        class="font-semibold">Click to upload</span></p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF</p>
                            </div>
                            <input type="file" class="hidden" ref="file" @change="loadImage($event)" accept="image/*" />
                            
                        </label>
                    </div>
                </slot>
            </section>
        </div>
    </div>
</template>


<script>
import { CircleStencil, Cropper } from "vue-advanced-cropper";

import "vue-advanced-cropper/dist/style.css";


function getMimeType(file, fallback = null) {
    const byteArray = (new Uint8Array(file)).subarray(0, 4);
    let header = '';
    for (let i = 0; i < byteArray.length; i++) {
        header += byteArray[i].toString(16);
    }
    switch (header) {
        case "89504e47":
            return "image/png";
        case "47494638":
            return "image/gif";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
            return "image/jpeg";
        default:
            return fallback;
    }
}

export default {

    name: 'PhotoCropperModal',
    components: {
        Cropper, CircleStencil
    },
    data() {
        return {
            image: {
                src: null,
                type: null
            },

        };
    },
    methods: {

        async storeAvatar() {
            try {
                const avatar = await axios.post(
                    route('pages.storeAvatar'),
                    {
                        avatar_path: this.$store.state.image
                    }
                );

                console.log(avatar)
            } catch (e) {
                console.log(e);
            }
        },

        close() {
            this.$emit('close');
        },

        crop() {
            const { canvas } = this.$refs.cropper.getResult();
            // canvas.toBlob((blob) => {
            //     console.log(blob);
                
            // }, this.image.type);
            this.$store.commit('updateImageSource', canvas.toDataURL());
            this.storeAvatar();
            this.reset();
            this.close();
        },

        reset() {
            this.image = {
                src: null,
                type: null
            }
        },

        loadImage(event) {
            // Reference to the DOM input element
            const { files } = event.target;
            // Ensure that you have a file before attempting to read it
            if (files && files[0]) {
                // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
                if (this.image.src) {
                    URL.revokeObjectURL(this.image.src)
                }
                // 2. Create the blob link to the file to optimize performance:
                const blob = URL.createObjectURL(files[0]);

                // 3. The steps below are designated to determine a file mime type to use it during the 
                // getting of a cropped image from the canvas. You can replace it them by the following string, 
                // but the type will be derived from the extension and it can lead to an incorrect result:
                //
                // this.image = {
                //    src: blob;
                //    type: files[0].type
                // }

                // Create a new FileReader to read this image binary data
                const reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.image" refers to the image of Vue component
                    this.image = {
                        // Set the image source (it will look like blob:http://example.com/2c5270a5-18b5-406e-a4fb-07427f5e7b94)
                        src: blob,
                        // Determine the image type to preserve it during the extracting the image from canvas:
                        type: getMimeType(e.target.result, files[0].type),
                    };
                };
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsArrayBuffer(files[0]);
            }
        },

    },
    destroyed() {
        // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
        if (this.image.src) {
            URL.revokeObjectURL(this.image.src)
        }
    },
};
</script>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.modal {
    background: #FFFFFF;
    box-shadow: 8px 8px 0 0;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}


.example-cropper {
    border: solid 1px #eee;
    min-height: 300px;
    width: 100%;
    height: 5vh;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 17px;
}

.button {
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    background: #35b392;
    cursor: pointer;
    transition: background 0.5s;
    font-family: Open Sans, Arial;
    margin: 0 10px;
}

.button:hover {
    background: #38d890;
}

.button input {
    display: none;
}
</style>
