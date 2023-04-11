let frmJson = [{
    type: 'drop-down',
    id: '',
    class: 'form-control',
    label: 'Bootstrap',
    css: 'color:black',
    title: 'Bootstrap',
    Option: ["version5.3", "version4.0", "version3.0"],
    validateType: {
        isValidate: false,
        rule: {
            require: true,
            minLength: 0,
            isEmail: false,
            isNumeric: false,
        }
    }
}, {
    type: 'row',
    col: [{
        type: 'text',
        id: 'txFName',
        class: 'form-control',
        label: 'First Name',
        place: 'Your First Name',
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
        type: 'text',
        id: 'txLName',
        class: 'form-control',
        label: 'Last Name',
        place: 'Your Last Name',
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

}, {
    type: 'row',
    col: [{
        type: 'textarea',
        id: 'txAdd',
        class: 'form-control',
        label: 'Address',
        place: 'Your Address',
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
    type: 'row',
    col: [{
        type: 'number',
        id: 'typeNumber',
        class: 'form-control',
        label: 'Mobile.no',
        place: 'Your Mob.no',
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
        place: 'Your Email',
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
    }, {
        type: 'password',
        id: 'txPassword',
        class: 'form-control',
        label: 'Password*',
        place: 'Your Password',
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
    type: 'row',
    col: [{
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
}, {
    type: 'row',
    col: [{
        type: 'radio',
        id: 'btnCheck',
        class: '',
        label: 'Select Your Gender',
        Option: ["Male", "Female", "Other"],
        validateType: {
            isValidate: false,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} selection is required!'
            }
        }
    },]
}, {
    type: 'row',
    col: [{
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
    },]
}, {
    type: 'row',
    col: [{
        type: 'Rating',
        id: 'star',
        class: '',
        label: 'Rate The Clinic',
        Option: [],
        validateType: {
            isValidate: false,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} selection is required!'
            }
        }
    }]
}, {
    type: 'row',
    col: [{
        type: 'signature',
        id: 'signature-pad',
        class: '',
        label: '',
        Option: [],
        validateType: {
            isValidate: false,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} selection is required!'
            }
        }
    },]
}, {
    type: 'row',
    col: [{
        type: 'recaptcha-V2',
        id: 'recaptcha',
        class: '',
        label: '',
        Option: [],
        validateType: {
            isValidate: false,
            rule: {
                require: true,
                minLength: 0,
                isEmail: false,
                isNumeric: false,
                message: '{LABEL} selection is required!'
            }
        }
    },]
}, {
    type: 'recaptcha-V3',
    id: 'recaptcha',
    class: '',
    label: '',
    Option: [],
    validateType: {
        isValidate: false,
        rule: {
            require: true,
            minLength: 0,
            isEmail: false,
            isNumeric: false,
            message: '{LABEL} selection is required!'
        }
    }
}, {
    type: 'row',
    col: [{
        type: 'button',
        id: 'btnSave',
        class: 'btn btn-primary',
        label: 'Save'
    }]
}];

let frmHTML = '';
for (let i = 0; i < frmJson.length; i++) {
    // console.log((i + 1) + "coming for" + frmJson[i].type);
    if (frmJson[i].type == 'row') {
        frmHTML = `${frmHTML}
        <div class="container p-2">
             <div class="row">
                ${column(frmJson[i])}
             </div>
         </div>
         <br>`;
    }
}
document.getElementById('dynamicFrm').innerHTML = frmHTML;
// document.getElementById('jsonForm').innerText = JSON.stringify(frmJson);
function onsaveclick() {
        let isFrmValid = true;
        // ON click data is not coming                              
        let frm = {
            firstName: document.getElementById('txFName').value,
            lastName: document.getElementById('txLName').value,
            email: document.getElementById('txEmail').value,
            address:document.getElementById('txAdd').value,
            password: document.getElementById('txPassword').value,
            gender: document.getElementById('btnCheck').value,
            mobile:document.getElementById('typeNumber').value,
            Date_of_birthday: document.getElementById('txtDob').value,
            Time: document.getElementById('appt').value,
            File: document.getElementById('file-upload').value,
        };

        // validation is not working can we add signaturePad validation            
        for (let i = 0; i < frmJson.length; i++) {
            if (frmJson[i].type == 'row') {
                frmJson[i].col.forEach((field) => {
                    if ('validateType' in field) {
                        if (field.validateType.isValidate) {
                            // first check required is true
                            if (field.validateType.rule.require) {
                                isFrmValid = false;
                                console.log(!getControl(field.id).value);
                                if (!getControl(field.id).value) {
                                    console.log(getControl(field.id).value,field.id)
                                    getControl(field.id).classList.add('is-invalid');
                                    getErrMsgControl(field.id).classList.remove('d-none');
                                    getErrMsgCozntrol(field.id).innerHTML = field.validateType.rule.message.replace('{LABEL}', field.label);
                                    return;
                                }
                                else {
                                    if (field.type == 'email') {
                                        if (!getControl(field.id).value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                                            getErrMsgControl(field.id).innerHTML = field.validateType.rule.message.replace('{LABEL}', field.label);
                                            isFrmValid = false;
                                            return;
                                        }
                                        else {
                                            getErrMsgControl(field.id).classList.add('d-none');
                                            getControl(field.id).classList.remove('is-invalid');
                                        }
                                    }else if(field.type == 'file-upload'){
                                    var inputElement = document.getElementById('file-upload');
                                    var files = inputElement.files;
                                    if(files.length == 0){
                                        getErrMsgControl(field.id).innerHTML = field.validateType.rule.message.replace('{LABEL}', field.label);
                                        isFrmValid = false;
                                        return;
                                    }else {
                                        var filename = files[0].name;
                                
                                        // getting file extension eg- .jpg,.png, etc
                                        var extension = filename.substr(filename.lastIndexOf("."));
                                
                                        // define allowed file types 
                                        var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.img|\.doc|\.pdf)$/i;
                                
                                        // testing extension with regular expression 
                                        var isAllowed = allowedExtensionsRegx.test(extension);
                                
                                        if (isAllowed) {
                                            getErrMsgControl(field.id).classList.add('d-none');
                                             getControl(field.id).classList.remove('is-invalid');
                                            // file upload logic goes here... 
                                        } else {
                                            alert("Invalid File Type.");
                                            return false;
                                        }
                                    }
                                }
                                    else {
                                        isFrmValid = true;
                                        if (!getErrMsgControl(field.id).classList.contains('d-none')) {
                                            getErrMsgControl(field.id).classList.add('d-none');
                                            getControl(field.id).classList.remove('is-invalid');
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }

        }
        console.log(isFrmValid,frm);
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
document.getElementById("clear").addEventListener('click', function () {
    signaturePad.clear();
})
//    ===============Signature Complete================ //




//   covert to bas64 // 
async function onb64() {
    var canvas = document.getElementById("signature-pad"); //get your canvas
    var image = canvas.toDataURL("image/png"); //Convert
    console.log("image",canvas.toDataURL("image/png"));
    // convertImageToBase64(image)
    
    // document.getElementById("signature-pad").style.display = "inline";
    // image = image.replace('data:image/png;base64,', '');
    // document.getElementById("signature-pad").value = image;
    function convertImageToBase64(imgUrl) {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;
            ctx.drawImage(image, 0, 0);
            const base64 = canvas.toDataURL();
            console.log(base64);
        }
        image.src = imgUrl;
    }
}
// End //

// column function
function column(frmJson) {
    // console.log(frmJson,'sdhfsf')
    let tempDiv = '';
    for (k = 0; k < frmJson.col.length; k++) {
        // console.log("row",Rowconditon(frmJson.col[k]));
        const metData = `<div class="col" >
                      ${Rowconditon(frmJson.col[k])}
                </div>`;
        // console.log("metData",metData);
        tempDiv = `${tempDiv} ${metData} `

        // console.log(tempDiv,"lklkl");    
    }
    return tempDiv
}
// =====End====

// condtion
function Rowconditon(frmJson) {
    // console.log(frmJson,'test-json');
    if (frmJson.type == 'text' || frmJson.type == 'email' || frmJson.type == 'date' || frmJson.type == 'password') {
        // console.log("come for [col] input");
        return `<div class="form-group">
                <label for="${frmJson.id}" style="${frmJson.css}">${frmJson.label}</label>
                <input type="${frmJson.type}" placeholder="${frmJson.place}" class="${frmJson.class}" id="${frmJson.id}" style="${frmJson.css}"/>
                <div id="${frmJson.id}_err" class="d-none invalid-feedback">
                </div>
                </div>`;

    }
    if (frmJson.type == 'number') {
        // console.log("come for [col] input");
        return `<div class="form-group  ">
        <label for="${frmJson.id}" style="${frmJson.css}">${frmJson.label}</label>
        <input type="${frmJson.type}" placeholder="${frmJson.place}" class="${frmJson.class}" id="${frmJson.id}" style="${frmJson.css}"/>
        <div id="${frmJson.id}_err" class="d-none invalid-feedback">
        </div>
        </div>`;
    }
    if (frmJson.type == 'button') {
        // console.log("come for button");
        return `
                <div class=" p-2">
                <button type="${frmJson.type}" class="${frmJson.class} btn-lg" id="${frmJson.id}" onclick="onsaveclick()">${frmJson.label}</button>
                </div>`;
    }
    if (frmJson.type == 'textarea') {
        // console.log("come for textarea");
        return `
                <div class="form-group mb-3 ">
                <label for="exampleFormControlTextarea1" style="${frmJson.css}" class="form-label" style="${frmJson.css}">${frmJson.label}</label>
                <textarea class="form-control" id="${frmJson.id}"  style="${frmJson.css}" rows="${frmJson.row}"></textarea>
              </div><div id="${frmJson.id}_err" class="d-none invalid-feedback">
              </div>
              </div>`;
    }
    if (frmJson.type == 'checkbox' || frmJson.type == 'radio') {
        // console.log("come for checkbox");
        frmHTML = `${frmHTML}<div class="form-group p-4">
                <h5> ${frmJson.label}</h5>
                <div>`;
        let postData = ""
        for (let j = 0; j < frmJson.Option.length; j++) {
            // console.log(j, frmJson.Option[j],'checkbox');
            const newData = `
                    <div class="form-group  p-1">
                    <label for="flexCheckDefault" style="${frmJson.css}">${frmJson.Option[j]}</label>
                    <input type="${frmJson.type}" class="${frmJson.class}" id="${frmJson.id}" value="${frmJson.Option[j]}" style="${frmJson.css}"/>
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
                <h6>${frmJson.label}<h6>
                <input type="file" class="form-control" id="${frmJson.id}" accept="image/*,.jpg,.jpeg,.doc,.pdf" multiple/>
               </div>
                <div id="${frmJson.id}_err" class="d-none invalid-feedback">
                </div>`;
    }
    if (frmJson.type == 'Rating') {
        return `
                <h5> 
                ${frmJson.label}
                </h5>
                <fieldset class="rate">
                <input type="radio" id="rating10" name="rating" value="10" onclick="starrating(10)"/><label for="rating10" title="5 stars"></label>
                <input type="radio" id="rating9" name="rating" value="9" onclick="starrating(9)"/><label class="half" for="rating9" title="4 1/2 stars"></label>
                <input type="radio" id="rating8" name="rating" value="8" onclick="starrating(8)"/><label for="rating8" title="4 stars"></label>
                <input type="radio" id="rating7" name="rating" value="7" onclick="starrating(7)"/><label class="half" for="rating7" title="3 1/2 stars"></label>
                <input type="radio" id="rating6" name="rating" value="6" onclick="starrating(6)"/><label for="rating6" title="3 stars"></label>
                <input type="radio" id="rating5" name="rating" value="5" onclick="starrating(5)"/><label class="half" for="rating5" title="2 1/2 stars"></label>
                <input type="radio" id="rating4" name="rating" value="4" onclick="starrating(4)"/><label for="rating4" title="2 stars"></label>
                <input type="radio" id="rating3" name="rating" value="3" onclick="starrating(3)"/><label class="half" for="rating3" title="1 1/2 stars"></label>
                <input type="radio" id="rating2" name="rating" value="2" onclick="starrating(2)"/><label for="rating2" title="1 star"></label>
                <input type="radio" id="rating1" name="rating" value="1" onclick="starrating(1)"/><label class="half" for="rating1" title="1/2 star"></label>
                </fieldset>`;
    }
    if (frmJson.type == 'time') {
        return `
        <div class="cs-form">
        <label for="${frmJson.id}" style="${frmJson.css}">${frmJson.label}</label>
        <input type="time" class="form-control" id="${frmJson.id}" value="10:05 AM" />
      </div>
      <div id="${frmJson.id}_err" class="d-none invalid-feedback">
      </div>`;
    }
    if (frmJson.type == 'drop-down') {
        return `<section>
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
    if (frmJson.type == 'signature') {
        return `
                <div class="form-group signature-component">
                <h5>Signature</h5>
                <canvas id="${frmJson.id}" width="400" height="200"></canvas>
                <div>
                  <button id="clear" class="btn btn-primary btn-sm">Clear</button>
                  <button id="clear" class="btn btn-primary btn-sm" onclick="onb64()">Submit</button>
                </div>
              </div><div id="${frmJson.id}_err" class="d-none invalid-feedback">
              </div>
              <script src="app.js"></script>`;
    }
    if (frmJson.type == 'recaptcha-V2') {
        return ` <div class="form-group g-recaptcha" data-sitekey="6LfBaDolAAAAAL62L2khchXawb_8Y6B5zOfdWch2">
                </div>`
    }
    if (frmJson.type == 'recaptcha-V3') {
        return `<br>
                <br>
                <script src="https://www.google.com/recaptcha/api.js?render=6LdnWD8lAAAAAOqRNWXpDAVFQWGIfaPmQI42Qo08"></script>`
    }
}

// getting the rating
function starrating(rt){
    console.log(rt)
    return rt
}
