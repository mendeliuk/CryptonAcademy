   <script>
      var message = "152999073894506063@http://localhost:3000/protected/index@89effb07-588e-4bf4-ba16-c10b2a136ae9@1553508995647";
      var key = "u-rXsMB_aegAnzC_CJt27plLGNqOfR2EHI5o2ro1NO";
      var baseKey = CryptoJS.enc.Base64url.parse(key);
      console.log("key："+baseKey.toString());
      var hash = CryptoJS.HmacSHA256(message, baseKey);
      var hashInBase64 = CryptoJS.enc.Base64url.stringify(hash);
      document.write(hashInBase64);
      document.write("\n");
      var shashInBase64 = CryptoJS.enc.Base64url.stringify(hash);
      console.log("result："+hash.toString())
      document.write(shashInBase64);
      console.log("done："+shashInBase64);
      var url = 'http://www.ctyun.cn/serviceValidate?service=http://localhost:3000/protected/index&ticket=89effb07-588e-4bf4-ba16-c10b2a136ae9&timestamp=1553508995647&appId=152999073894506063&signature=evvc3Ix87nk-KkuIaQJrLP7Vu76dTsh-BwnC6AHXFfU'
    </script>
