<h1 align="center">:octocat: Simple Events :octocat:</h1>

  <p align="center">
  Built with React Native v0.63.0
   </p>
   
   ## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to use](#how to use)
- [Screenshot](#screenshot)
- [Contributors](#contributors)

## Introduction
Simple Events is event explore app for simple use and easy.

## Features
* Event Explore
* Event Detail
* Login
* My Event

## How to use

Untuk developer yang ingin menggunakan codebase ini silahkan ikuti intruksi dibawah ini:

1. setelah mengclone atau mendownload codebase ini, buka filenya di programing tools seperti VS Code atau yang sejenisnya
2. jika clone dari repo dengan url segera hapus `.git` folder, atau jalankan > `rm -rf .git`
3. buka terminal lalu jalankan > `yarn`
4. lalu jalan kan > `cd ios && pod install && cd ..`
5. lalu jalan kan > `npx react-native-fix-image`
6. lalu jalankan > `react-native link`
7. lalu jalankan > `chmod +x prepare-env.sh`
8. setelah itu buat file 'local.properties' dengan isi directori sdk android di komputer anda, taruh di dalam file android agar dapat menjalankan emulator android
9. selanjutnya jalankan > `yarn env:dev` , atau enviroment lainnya sesuai script yg terdapat di package.json
10. terakhir jalankan > `yarn ios` atau > `yarn android` untuk running RN di device atau emulator

## Screenshot
<div align="center">
    <img width="200" src="https://github.com/agusnuryady/Simple-Events/blob/master/src/assets/images/sc_1.png">
    <img width="200" src="https://github.com/agusnuryady/Simple-Events/blob/master/src/assets/images/sc_2.png">
    <img width="200" src="https://github.com/agusnuryady/Simple-Events/blob/master/src/assets/images/sc_3.png">
    <img width="200" src="https://github.com/agusnuryady/Simple-Events/blob/master/src/assets/images/sc_4.png">
</div>

## Contributors
* Created by @agusnuryady
* 24 May 2021
