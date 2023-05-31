var pictureSet = 1;

    function changePictureSet(setNumber) {
        pictureSet = setNumber;

        if (pictureSet === 1) {
            changeDynamicIslandImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet1/DIMorado.jpg");
            changeDeepCamImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet1/DeepMorado.jpg");
            changeChipImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/ChipMorado.jpg");
            changeAlwaysOnImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet1/AlwaysOnMorado.jpg");
            changeCeramicShieldImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet1/CeramicPurple.jpg");
            changeWaterResistImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/WResistPurple.jpg");
            changeSelfieImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/SelfiePurple.jpg");
        } else if (pictureSet === 2) {
            changeDynamicIslandImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet1/DIGold.jpg");
            changeDeepCamImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet1/DeepGold.jpg");
            changeChipImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/ChipGold.jpg");
            changeAlwaysOnImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet1/AlwaysOnGold.jpg");
            changeCeramicShieldImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet1/CeramicGold.jpg");
            changeWaterResistImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/WResistGold.jpg");
            changeSelfieImg("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/SelfieGold.jpg");
        } else if (pictureSet === 3) {
            changeDynamicIslandImage("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet3/DIMorado.jpg");
            changeModoAccionVideo("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet3/ModoAccionVideo.mp4");
            changeAlwaysOnImage("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet3/AlwaysOnMorado.jpg");
            changeCeramicShieldImage("../ASSETS/IMAGES/PRODUCTOS/iPhone14Pro/PROPS/PictureSet3/CeramicPurple.jpg");
        }
    }

    function changeDynamicIslandImg(src) {
        var dynamicIslandImg = document.getElementById('dynamicIslandImg');
        dynamicIslandImg.src = src;
    }
    
    function changeDeepCamImg(src) {
        var dynamicIslandImg = document.getElementById('DeepCamImg');
        dynamicIslandImg.src = src;
    }

    function changeChipImg(src) {
        var dynamicIslandImg = document.getElementById('ChipImg');
        dynamicIslandImg.src = src;
    }