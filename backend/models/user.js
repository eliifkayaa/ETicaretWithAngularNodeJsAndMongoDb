const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true,
        minLenght: [3, "Ad soyad kısmı en az 3 karakter olmalıdır"]
    },
    userName: {
        type: String,
        required: true,
        minLenght: [3, "Kullanıcı adı kısmı en az 3 karakter olmalıdır"],
        unique: true //küçük harf olsun rakam eklesin
    },
    email: {
        type: String,
        required: true,
        minLenght: [3, "Mail adresi en az 3 karakter olmalıdır."],
        email: ["Geçerli bir mail adresi yazın!"], //tipi email olsun
        unique: true
    },
    imageUrl: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    //Best practies olarak saklamamız gerekiyor. Ne zaman lazım olacağını bilemeyiz.
    //Kayıt ve güncelleme tarihi
    mailConfirmCode: String, //mail onayı 
    isMailConfirm: Boolean, //mail onay
    createdDate: Date,
    updatedDate: Date,
    isAdmin: Boolean //Role
});

const User = mongoose.model("User", userSchema);

module.exports = User;