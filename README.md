Mylinx is a link in bio generator built with Laravel and Vue.js. This project allows users to create customizable landing pages that aggregate multiple links, making it easy to share various online resources in one place.

## Built with

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" height="30" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" height="30" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height="30" />
</div>

## Dashboard Preview

<img src="https://github.com/AramDonyaee/mylinx/blob/main/dashboard%20preview.png?raw=true" />

## Features

**Different Link Types**: Support for various types of links to accommodate different user needs.

<img src="https://github.com/AramDonyaee/mylinx/blob/main/different%20link%20types.png?raw=true" />
  
**Customization Options**: Users can change the style and color of links to match their branding.
  
<img src="https://github.com/AramDonyaee/mylinx/blob/main/customizations.PNG?raw=true" />

**Background Changes**: Flexibility to change backgrounds for a personalized touch.

<img src="https://github.com/AramDonyaee/mylinx/blob/main/different%20backgrounds.PNG?raw=true" />

**Link Management**: Add, edit, sort, and delete links easily.

<img src="https://github.com/AramDonyaee/mylinx/blob/main/sortable%20links.PNG?raw=true" />

**Responsive Design**: Optimized for various screen sizes and devices.

<table align="center">
  <tr>
    <th style="text-align: center;">Desktop Version</th>
    <th style="text-align: center;">Mobile Version</th>
  </tr>
  <tr>
    <td style="text-align: center;">
      <img src="https://github.com/AramDonyaee/mylinx/blob/main/page%20desktop%20version.png?raw=true" alt="Desktop Screenshot" style="max-width: 100%; height: auto;">
    </td>
    <td style="text-align: center;">
      <img src="https://github.com/AramDonyaee/mylinx/blob/main/page%20mobile%20version.png?raw=true" alt="Mobile Screenshot" style="max-width: 100%; height: auto;">
    </td>
  </tr>
</table>

**Landing Page**

<img src="https://github.com/AramDonyaee/mylinx/blob/main/landing%20page.png?raw=true" />

## Installation

To get started with mylinx, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/AramDonyaee/mylinx.git
cd mylinx
composer install
npm install
```

Then, you should run the migrations with this command:
```bash
php artisan migrate
```

Finally, run these commands and head over to your favorite browser and enter ```localhost:8000```:
```bash
php artisan serve
npm run dev
```
Don't forget to download, install and configure mailhog as the local email server. Moreover, you have to create the database and database admin for your project before running the migrations. Finally, update your .env file accordingly.

