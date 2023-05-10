module.exports = mongoose => {
    const regression = mongoose.model(
      "user1",
      mongoose.Schema(
        {
            name: String,
            parentsname: String,
            studentmobile: Number,
            parentmobile:Number,
            email: String,
            birthdate: Date,
            gender: String,
            whatsapp: Number,
            education : String,
            address: String,
            city:  String,
            takenby : String,
            leadsource : String,

        },
        { timestamps: true }
      )
    );
  
    return regression;
  };