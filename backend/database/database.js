const mongoose = require("mongoose")

const connection = async () => {
    try {
        const uri = "mongodb+srv://ekaya:1@eticaretdb.94p3ctg.mongodb.net/?retryWrites=true&w=majority"
        var result = await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDb bağlantısı başarılı");
    } catch (error) {
        console.log(`MongoDb bağlantısı sırasında bir hatayla karşılaştık. Hata: ${error}`);
    }
}

module.exports = connection