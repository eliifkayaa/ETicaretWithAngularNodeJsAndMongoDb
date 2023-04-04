//Uygulamayı asıl çalıştıracak dosya server.js dir.

//connectionı çağırmamız lazım.
const connection = require("./database/database");
const express = require("express");
const cors = require("cors");
const { v4: uuidv4} = require("uuid")
const User = require("./models/user")

//Routerlar 
const authRouter = require("./routers/auth.router")

//Api istekleri için 
const app = express();

//İsteklerde Json formatı geçerli olsun
app.use(express.json());

//CORS politikası
app.use(cors())

//Db Connection
connection();

//Admin Kullanıcısı yoksa eğer default bir kullanıcı ekle.
const createAdminUser = async () => {
    let userCount = await User.find({}).count();
    if(userCount == 0) {
        let newUser = new User({
            _id: uuidv4(),
            name: "Elif Gökçe",
            userName: "egokce",
            email: "elifkayagokce@gmail.com",
            isMailConfirm: true,
            mailConfirmCode: "000000",
            password: "1",
            createdDate: Date.now(),
            isAdmin: true
        });
        
        await newUser.save();
    }
}

createAdminUser();

//Auth Router : uygulamayı ayağa kaldırmak için
app.use("/api/auth/" , authRouter);

const port = process.env.PORT || 3000; //Canlıda çalışan port kodu (Azure için mutlaka bu kod yazılmalı)
app.listen(port, ()=> console.log("Sunucu çalışıyor..."))