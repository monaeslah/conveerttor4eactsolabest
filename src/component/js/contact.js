function buildData() {
    var txtData = "Name:" + $("#c-name").val() +
        "\r\ntel:" + $("#c-tel").val() +
        "\r\email:" + $("#c-email").val() +
        "\r\email:" + $("#c-text").val();
    return txtData
}

function WriteToFile(passForm) {
    var fso = CreateObject("Scripting.FileSystemObject");
    var s = fso.CreateTextFile("contact.json", True);
    var data = buildData();;
    s.writeline("data :" + data);
    s.writeline("-----------------------------");
    s.Close();
}
if (lang === "fa") {
    html = `<div class="container">
    <div class="row">
        <div class="col-md-8 contact-data" id="info">
            <div class="info-box">
                <div style="font-size:13px; line-height:2;" id="solabest-address">
                    <b>آدرس دفتر:</b>
                    <p class="address">تهران خیابان شریعتی خیابان میرزاپور کوچه‌ی علی محمدی بن بست بنفشه پلاک ۲</p>
                    <p class="solabest-tel" id="solabest-tel">
                        <b>	تلفن:</b>  ۹۸۲۱۲۶۱۰۲۰۱۴۰
                    </p>
                    <b>آدرس کارخانه:</b>
                    <p class="address">شمس آباد، بلوار بوستان، انتهای گلبن ۷، سولابست</p>
                    <p class="solabest-tel" id="solabest-tel">
                        <b>	تلفن:</b>  ۹۸۲۱۵۶۲۳۶۷۳۷
                    </p>
   
                </div>
                <div style="font-size: 13px; line-height:1.5;">
                    <p id="solabest-email">
                            <b>ایمیل: </b> info@solabest.com
                        </p>
                    </p>
                </div>
                <div class="social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/solabeststone/" class="fa fa-instagram"></a>
                    <a href="https://www.linkedin.com/company/12586685/admin/" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-twitter"></a>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.016977363258!2d51.212133951257734!3d35.355224980174825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIxJzE4LjgiTiA1McKwMTInNTEuNiJF!5e0!3m2!1sen!2sae!4v1549116483268" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>        </div>
        <div class="col-md-4">
            <div class="form-box">
                <h3>تماس با ما:</h3>
                <form action="/" style="font-size: 13px; line-height: 2;">
                    <div class="form-group">
                    <label id="contact-name" for="c-name">نام:</label>
                    <input type="text" class="form-control" id="c-name">
                    </div>
                    <div class="form-group">
                    <label id="contact-tel" for="c-tel">شماره تماس:</label>
                    <input type="tel" class="form-control" id="c-tel">
                    </div>
                    <div class="form-group">
                    <label id="contact-email" for="c-email">ایمیل آدرس:</label>
                    <input type="email" class="form-control" id="c-email">
                    </div>
                    <div class="form-group">
                    <label id="contact-text" for="c-text">پیغام:</label>
                    <textarea type="text" class="form-control" id="c-text"></textarea>
                    </div>
                    <button type="submit" class="btn btn-default submit-but">ارسال</button>
                </form>
            </div>
        </div>
    </div>
   </div>`

} else {
    html = `<div class="container">
    <div class="row">
        <div class="col-md-8 contact-data" id="info">
            <div class="info-box">
                <div id="solabest-address">
                    <b>OFFICE ADDRESS :</b>
                    <p class="address">Unit. 2,No, Banafshe Dead-End Ali Mohammadi Alley, Mirzapour Street,Shariati Street, Tehran, IRAN</p>
                    <p class="solabest-tel" id="solabest-tel">
                        <b>	TEL :</b> +9821 2610 2040
                    </p>
                    <b>WAREHOUSE ADDRESS:</b>
                    <p class="address">End of 7th Golbon, Boostan Blvd, Shams abad industrial city, IRAN</p>
                    <p class="solabest-tel" id="solabest-tel">
                        <b>	TEL :</b> +9821 5623 6737
                    </p>
                </div>
                <div>
                    <p id="solabest-email">
                            <b>EMAIL : </b> info@solabest.com
                        </p>
                     
                    </p>
                </div>
                <div class="social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/solabeststone/" class="fa fa-instagram"></a>
                    <a href="https://www.linkedin.com/company/12586685/admin/" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-twitter"></a>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.016977363258!2d51.212133951257734!3d35.355224980174825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIxJzE4LjgiTiA1McKwMTInNTEuNiJF!5e0!3m2!1sen!2sae!4v1549116483268" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>        </div>
        <div class="col-md-4">
            <div class="form-box">
                <h3>Contact Us:</h3>
                <form action="/">
                    <div class="form-group">
                    <label id="contact-name" for="c-name">Name:</label>
                    <input type="text" class="form-control" id="c-name">
                    </div>
                    <div class="form-group">
                    <label id="contact-tel" for="c-tel">Phone Number:</label>
                    <input type="tel" class="form-control" id="c-tel">
                    </div>
                    <div class="form-group">
                    <label id="contact-email" for="c-email">Email address:</label>
                    <input type="email" class="form-control" id="c-email">
                    </div>
                    <div class="form-group">
                    <label id="contact-text" for="c-text">Message:</label>
                    <textarea type="text" class="form-control" id="c-text"></textarea>
                    </div>
                    <button type="submit" class="btn btn-default submit-but">Submit</button>
                </form>
            </div>
        </div>
    </div>
   </div>`
}



$('.contact-main').append(html);