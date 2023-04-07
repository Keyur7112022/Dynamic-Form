let frmJson = [{
    type: 'drop-down',
    id: 'txFName',
    class: 'form-control',
    label: 'Bootstrap',
    css: 'color:black',
    title: 'Bootstrap',
    Option: ["version5.3", "version4.0","version3.0"],
    col: 'col-6',
    validateType: {
        isValidate: false,
        rule: {
            require: true,
            minLength: 0,
            isEmail: false,
            isNumeric: false,
            message: '{LABEL} is required!'
        }
    }
},{
    type:'row',
    col:[{
        type: 'text',
        id: 'txFName',
        class: 'form-control',
        label: 'First Name',
        place:'Your First Name',
        css: 'color:black',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} is required!'
            }
        }
    },{
        type: 'text',
        id: 'txLName',
        class: 'form-control',
        label: 'Last Name',
        css: 'color:black',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} is required!'
            }
        }
    }, ]

},{
    type:'row',
    col:[{
        type: 'textarea',
        id: 'txAdd',
        class: 'form-control',
        label: 'Address',
        css: 'color:black',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} is required!'
            }
        }
    }, ]
},
{
    type:'row',
    col:[{
        type: 'text',
        id: 'txMob',
        class: 'form-control',
        label: 'Mobile.no',
        css: 'color:black',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} is required!'
            }
        }
    }, {
        type: 'email',
        id: 'txEmail',
        class: 'form-control',
        label: 'Email*',
        css: 'color:black',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: true,
                isNumeric: false,
                message: '{LABEL} is required & enter valid email address!'
            }
        }
    },{
        type: 'password',
        id: 'txPassword',
        class: 'form-control',
        label: 'Password*',
        css: 'color:black',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} is required!'
            }
        }
    },{
        type: 'date',
        id: 'txtDob',
        class: 'form-control',
        label: 'Date Of Birth',
        css: 'color:black',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} is required!'
            }
        }
    },]
},
{
    type:'row',
    col:[{
        type: 'time',
        id: 'appt',
        class: 'form-control',
        label: '',
        css: 'color:black',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} is required!'
            }
        }
}]
},{
    type:'row',
    col:[{
    type: 'checkbox',
    id: 'btnCheck',
    class: '',
    label: 'Select Your Gender',
    Option: ["Male", "Female", "Other"],
    validateType: {
        isValidate: true,
        rule: {
            require: true,
            minLength: 0,
            isEmail: false,
            isNumeric: false,
            message: '{LABEL} selection is required!'
        }
    }
},]
},{
    type:'row',
    col:[{
        type: 'file-upload',
        id: 'file-upload',
        class: '',
        label: 'Please Upload Mentioned doc.',
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} selection is required!'
            }
        }
    }, ]
},{
    type:'row',
    col:[{
        type: 'Rating',
        id: 'star',
        class: '',
        label: 'Rate The Clinic',
        Option: [],
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} selection is required!'
            }
        }
    }]
},{
    type:'row',
    col:[{
        type: 'signature',
        id: 'signature-pad',
        class: '',
        label: '',
        Option: [],
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} selection is required!'
            }
        }
    },]
},{
    type:'row',
    col:[{
        type: 'recaptcha-V2',
        id: 'recaptcha',
        class: '',
        label: '',
        Option: [],
        validateType: {
            isValidate: true,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} selection is required!'
            }
        }
    },]
},{
    type: 'recaptcha-V3',
    id: 'recaptcha',
    class: '',
    label: '',
    Option: [],
    validateType: {
        isValidate: true,
        rule: {
            require: true,
            minLength: 0,
            isEmail: false,
            isNumeric: false,
            message: '{LABEL} selection is required!'
        }
    }
}, {
    type:'row',
    col:[{
    type: 'button',
    id: 'btnSave',
    class: 'btn btn-primary',

    label: 'Save'
}]
}];

let frmHTML = '';
for (let i = 0; i < frmJson.length; i++) {
    console.log((i + 1) + "coming for" + frmJson[i].type);
    if(frmJson[i].type == 'row'){
        frmHTML = `${frmHTML}
        <div class="container p-1">
             <div class="row">
                ${column(frmJson[i])}
             </div>
         </div>
         <br>`;
    }
    if (frmJson[i].type == 'text' || frmJson[i].type == 'email' || frmJson[i].type == 'date' || frmJson[i].type == 'password') {
        frmHTML = `${frmHTML}
        <div class="form-group  p-2">
        <label for="${frmJson[i].id}" style="${frmJson[i].css}">${frmJson[i].label}</label>
        <input type="${frmJson[i].type}"  class="${frmJson[i].class}" id="${frmJson[i].id}" style="${frmJson[i].css}"/>
        <div id="${frmJson[i].id}_err" class="d-none invalid-feedback">
        </div>
        </div>`;
    }
    if (frmJson[i].type == 'button') {
    
        frmHTML = `${frmHTML}
        <div class=" p-2">
        <button type="${frmJson[i].type}" class="${frmJson[i].class} btn-lg" id="${frmJson[i].id}" onclick="onsaveclick()">${frmJson[i].label}</button>
        </div>`;
    } 
    if (frmJson[i].type == 'textarea') {
        
        frmHTML = `${frmHTML}
        <div class="form-group mb-3 ">
        <label for="exampleFormControlTextarea1" style="${frmJson[i].css}" class="form-label" style="${frmJson[i].css}">${frmJson[i].label}</label>
        <textarea class="form-control" id="${frmJson[i].id}"  style="${frmJson[i].css}" rows="${frmJson[i].row}"></textarea>
      </div><div id="${frmJson[i].id}_err" class="d-none invalid-feedback">
      </div>
      </div>`;
    }
    if (frmJson[i].type == 'checkbox' || frmJson[i].type == 'radio') {
       
        frmHTML = `${frmHTML}<div class="form-group p-4">
        <h5> ${frmJson[i].label}</h5>
        <div>`;
        let postData = ""
        for (let j = 0; j < frmJson[i].Option.length; j++) {
            const newData = `<section>
            <div class="form-group  p-1">
            <label for="flexCheckDefault" style="${frmJson[i].css}">${frmJson[i].Option[j]}</label>
            <input type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}" style="${frmJson[i].css}"/>
            <div id="${frmJson[i].id}_err" class="d-none invalid-feedback"></div>
            </div>
            </section>`;

            postData = `${postData} ${newData} `
        }

        frmHTML = `${frmHTML} ${postData}`
    }
    if (frmJson[i].type == 'file-upload') {
        frmHTML = `${frmHTML}
        <br>
        <div class="form-group ">
        <label class="form-label" for="customFile">${frmJson[i].label}</label>
        <input type="file" class="form-control" id="${frmJson[i].id}" multiple/>
        <br>
        <button class="btn btn-primary btn-sm" onclick="validateFileType()">Upload</button></div>
        <div id="${frmJson[i].id}_err" class="d-none invalid-feedback">
        </div>`;
    }
    if (frmJson[i].type == 'Rating') {
        frmHTML = `${frmHTML}<br>
        <h5> 
        ${frmJson[i].label}
        </h5>
        <div class="center">
        <fieldset class="rating">
            <input type="radio" id="star5" name="rating" value="5"/><label for="star5" class="full" title="Awesome"></label>
            <input type="radio" id="star4.5" name="rating" value="4.5"/><label for="star4.5" class="half"></label>
            <input type="radio" id="star4" name="rating" value="4"/><label for="star4" class="full"></label>
            <input type="radio" id="star3.5" name="rating" value="3.5"/><label for="star3.5" class="half"></label>
            <input type="radio" id="star3" name="rating" value="3"/><label for="star3" class="full"></label>
            <input type="radio" id="star2.5" name="rating" value="2.5"/><label for="star2.5" class="half"></label>
            <input type="radio" id="star2" name="rating" value="2"/><label for="star2" class="full"></label>
            <input type="radio" id="star1.5" name="rating" value="1.5"/><label for="star1.5" class="half"></label>
            <input type="radio" id="star1" name="rating" value="1"/><label for="star1" class="full"></label>
            <input type="radio" id="star0.5" name="rating" value="0.5"/><label for="star0.5" class="half"></label>
        </fieldset>
    </div>`;
    }
    if (frmJson[i].type == 'time') {
        frmHTML = `${frmHTML}
        <div class="form-group p-3">
        <label for="appt"><h5>Select a time:</h5></label><br>
        <input type="time" id="${frmJson[i].id}" > 
        </div>
        <div id="${frmJson[i].id}_err" class="d-none invalid-feedback">
        </div>`;
    }
    if (frmJson[i].type == 'drop-down') {
        frmHTML = `${frmHTML}<section>
        <div class="form-group btn-group float-end">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         ${frmJson[i].label}
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      </section>`;
    }
    if(frmJson[i].type  == 'signature'){
        frmHTML = `${frmHTML}<br><br><br>
        <div class="form-group signature-component">
        <h5>Signature</h5>
        <canvas id="${frmJson[i].id}" width="400" height="200"></canvas>
        <div>
          <button id="clear" class="btn btn-primary btn-sm">Clear</button>
          <button id="clear" class="btn btn-primary btn-sm" onclick="onb64()">Submit</button>
        </div>
        <div id="${frmJson[i].id}_err" class="d-none invalid-feedback">
        </div>
      </div>
      <script src="app.js"></script>`;
    }
    if(frmJson[i].type  == 'recaptcha-V2'){
        frmHTML = `${frmHTML}<br>
        <br>
        <div class="form-group g-recaptcha" data-sitekey="6LfBaDolAAAAAL62L2khchXawb_8Y6B5zOfdWch2"></div>`
    }
    if(frmJson[i].type   == 'recaptcha-V3'){
        frmHTML = `${frmHTML}<br>
        <br>
        <script src="https://www.google.com/recaptcha/api.js?render=6LdnWD8lAAAAAOqRNWXpDAVFQWGIfaPmQI42Qo08"></script>`
    }
} 
document.getElementById('dynamicFrm').innerHTML = frmHTML;
// document.getElementById('jsonForm').innerText = JSON.stringify(frmJson);
function onsaveclick() {
    let isFrmValid = true;
    let frm = {
        firstName: document.getElementById('txFName').value,
        lastName: document.getElementById('txLName').value,
        email: document.getElementById('txEmail').value,
        password: document.getElementById('txPassword').value,
        terms: document.getElementById('btnCheck').checked,
        Date_of_birthday: document.getElementById('txtDob').value,
        signature:document.getElementById('signature-pad').value
    };
    for (let i = 0; i < frmJson.length; i++) {
        if ('validateType' in frmJson[i]) {
            if (frmJson[i].validateType.isValidate) {
                // first check required is true
                if (frmJson[i].validateType.rule.require) {
                    isFrmValid = false;
                    if (!getControl(frmJson[i].id).value) {
                        getControl(frmJson[i].id).classList.add('is-invalid');
                        getErrMsgControl(frmJson[i].id).classList.remove('d-none');
                        getErrMsgControl(frmJson[i].id).innerHTML = frmJson[i].validateType.rule.message.replace('{LABEL}', frmJson[i].label);
                        break;
                    }
                    else {
                        if (frmJson[i].type == 'email') {
                            if (!getControl(frmJson[i].id).value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                                getErrMsgControl(frmJson[i].id).innerHTML = frmJson[i].validateType.rule.message.replace('{LABEL}', frmJson[i].label);
                                isFrmValid = false;
                                break;
                            } 
                            else {
                                getErrMsgControl(frmJson[i].id).classList.add('d-none');
                                getControl(frmJson[i].id).classList.remove('is-invalid');
                            }
                        } else {
                            isFrmValid = true;
                            if (!getErrMsgControl(frmJson[i].id).classList.contains('d-none')) {
                                getErrMsgControl(frmJson[i].id).classList.add('d-none');
                                getControl(frmJson[i].id).classList.remove('is-invalid');
                            }
                        }
                    }
                }
            }
        } 
    }

    if (isFrmValid) {
        console.log(frm);
    }
}

function getControl(elemId) {
    return document.getElementById(elemId);
}

function getErrMsgControl(elemId) {
    return document.getElementById(elemId + '_err');
}

/* ===============Signature================ */

var canvas = document.getElementById("signature-pad");

       function resizeCanvas() {
           var ratio = Math.max(window.devicePixelRatio || 1, 2);
           canvas.width = canvas.offsetWidth * ratio;
           canvas.height = canvas.offsetHeight * ratio;
           canvas.getContext("2d").scale(ratio, ratio);
       }
       window.onresize = resizeCanvas;
       resizeCanvas();

       var signaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgb(250,250,250)'
       });

       document.getElementById("clear").addEventListener('click', function(){
        signaturePad.clear();
       })       
//    ===============Signature Complete================ //

 
// ========Javascript function to validate the Files======== //
 function validateFileType() {
    var inputElement = document.getElementById('file-upload');
    var files = inputElement.files;
    if(files.length==0){
        alert("Please choose a file first...");
        return false;
    }else{
        var filename = files[0].name;

        // getting file extension eg- .jpg,.png, etc
        var extension = filename.substr(filename.lastIndexOf("."));

       // define allowed file types 
        var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.img|\.doc|\.pdf)$/i;

        // testing extension with regular expression 
        var isAllowed = allowedExtensionsRegx.test(extension);

        if(isAllowed){
            alert("File type is valid for the upload");
        // file upload logic goes here... 
        }else{
            alert("Invalid File Type.");
            return false;
        }
    }
}


    //  Signature covert to bas64 // 
    async function onb64(){
        var canvas = document.getElementById("signature-pad"); //get your canvas
        var image = canvas.toDataURL("image/png"); //Convert
        convertImageToBase64(image)
        // document.getElementById("signature-pad").style.display = "inline";
        // image = image.replace('data:image/png;base64,', '');
        // document.getElementById("signature-pad").value = image;
     function convertImageToBase64(imgUrl) {
        const image = new Image();
        image.crossOrigin='anonymous';
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.height = image.naturalHeight;
          canvas.width = image.naturalWidth;
          ctx.drawImage(image, 0, 0);
          const base64 =  canvas.toDataURL();
          console.log(base64);
        }
        image.src = imgUrl;
      }
    }
      // End //


    // column function
    function column(frmJson){
        let tempDiv = '';
        for (k = 0; k < frmJson.col.length; k++){
              const metData = `<div class="col">
                      ${Rowconditon(frmJson.col[k])}
                </div>`;
                tempDiv = `${tempDiv} ${metData}`;        
            }
            return tempDiv
        }
    // =====End====

// condtion
    function Rowconditon(frmJson){
   if (frmJson.type == 'text' || frmJson.type == 'email' || frmJson.type == 'date' || frmJson.type =='password') 
{
                console.log("come for [col] input");
                return `<div class="form-group  p-2">
                <label for="${frmJson.id}" style="${frmJson.css}">${frmJson.label}</label>
                <input type="${frmJson.type}" placeholder="${frmJson.place}" class="${frmJson.class}" id="${frmJson.id}" style="${frmJson.css}"/>
                <div id="${frmJson.id}_err" class="d-none invalid-feedback">
                </div>
                </div>`;
                
            }
            if (frmJson.type == 'button') {
                console.log("come for button");
                return `
                <div class=" p-2">
                <button type="${frmJson.type}" class="${frmJson.class} btn-lg" id="${frmJson.id}" onclick="onsaveclick()">${frmJson.label}</button>
                </div>`;
            } 
            if (frmJson.type == 'textarea') {
                console.log("come for textarea");
                return `
                <div class="form-group">
                <label for="exampleFormControlTextarea1" style="${frmJson.css}" class="form-label" style="${frmJson.css}">${frmJson.label}</label>
                <textarea class="form-control" id="${frmJson.id}"  style="${frmJson.css}" rows="${frmJson.row}"></textarea>
              </div><div id="${frmJson.id}_err" class="d-none invalid-feedback"></div>
              </div>`;
            }
            if (frmJson.type == 'checkbox' || frmJson.type == 'radio') {
             
                 `<div class="form-group">
                <h5> ${frmJson.label}</h5>
                <div>`;
                let postData = ''
                for (let j = 0; j < frmJson.Option.length; j++) {
                    console.log(j, frmJson.Option[j],'checkbox');
                    const newData = `
                    <div class="form-group">
                    <label for="flexCheckDefault" style="${frmJson.css}">${frmJson.Option[j]}</label>
                    <input type="${frmJson.type}" class="${frmJson.class}" id="${frmJson.id}" style="${frmJson.css}"/>
                    <div id="${frmJson.id}_err" class="d-none invalid-feedback"></div>
                    </div>`;
        
                    postData = `${postData} ${newData} `
                }
        
                frmHTML = `${frmHTML} ${postData}`
                return postData
            }
            if (frmJson.type == 'file-upload') {
                return `
                <br>
                <div class="form-group ">
                <label class="form-label" for="customFile">${frmJson.label}</label>
                <input type="file" class="form-control" id="${frmJson.id}" multiple/>
                <br>
                <button class="btn btn-primary btn-sm" onclick="validateFileType()">Upload</button></div>
                <div id="${frmJson.id}_err" class="d-none invalid-feedback">
                </div>`;
            }
            if (frmJson.type == 'Rating') {
                return`
                <h5> 
                ${frmJson.label}
                </h5>
                <div class="center">
                <fieldset class="rating">
                    <input type="radio" id="star5" name="rating" value="5"/><label for="star5" class="full" title="Awesome"></label>
                    <input type="radio" id="star4.5" name="rating" value="4.5"/><label for="star4.5" class="half"></label>
                    <input type="radio" id="star4" name="rating" value="4"/><label for="star4" class="full"></label>
                    <input type="radio" id="star3.5" name="rating" value="3.5"/><label for="star3.5" class="half"></label>
                    <input type="radio" id="star3" name="rating" value="3"/><label for="star3" class="full"></label>
                    <input type="radio" id="star2.5" name="rating" value="2.5"/><label for="star2.5" class="half"></label>
                    <input type="radio" id="star2" name="rating" value="2"/><label for="star2" class="full"></label>
                    <input type="radio" id="star1.5" name="rating" value="1.5"/><label for="star1.5" class="half"></label>
                    <input type="radio" id="star1" name="rating" value="1"/><label for="star1" class="full"></label>
                    <input type="radio" id="star0.5" name="rating" value="0.5"/><label for="star0.5" class="half"></label>
                </fieldset>
            </div>`;
            }
            if (frmJson.type == 'time') {
                return `
                <div class="form-group p-3">
                <label for="appt"><h5>Select a time:</h5></label><br>
                <input type="time" id="${frmJson.id}" > 
                </div>
                <div id="${frmJson.id}_err" class="d-none invalid-feedback">
                </div>`;
            }
            if (frmJson.type == 'drop-down') {
                return`<section>
                <div class="form-group btn-group float-end">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                 ${frmJson.label}
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
              </section>`;
            }
            if(frmJson.type  == 'signature'){
                return `
                <div class="form-group signature-component">
                <h5>Signature</h5>
                <canvas id="${frmJson.id}" width="400" height="200"></canvas>
                <div>
                  <button id="clear" class="btn btn-primary btn-sm">Clear</button>
                  <button id="clear" class="btn btn-primary btn-sm" onclick="onb64()">Submit</button>
                </div>
                <div id="${frmJson.id}_err" class="d-none invalid-feedback">
                </div>
              </div>
              <script src="app.js"></script>`;
            }
            if(frmJson.type  == 'recaptcha-V2'){
               return`
                <div class="form-group g-recaptcha" data-sitekey="6LfBaDolAAAAAL62L2khchXawb_8Y6B5zOfdWch2"></div>`
            }
            if(frmJson.type  == 'recaptcha-V3'){
               return`<br>
                <br>
                <script src="https://www.google.com/recaptcha/api.js?render=6LdnWD8lAAAAAOqRNWXpDAVFQWGIfaPmQI42Qo08"></script>`
            }
        }