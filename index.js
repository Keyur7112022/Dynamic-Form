let frmJson = [{
    type: 'drop-down',
    id: 'txFName',
    class: 'form-control',
    label: 'First Name',
    dec: 'color:black',
    title: 'Bootstrap',
    Option: ["version5.3", "version4.0","version3.0"],
    col: 'col-5',
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
}, {
    type: 'text',
    id: 'txFName',
    class: 'form-control',
    label: 'First Name',
    dec: 'color:black',
    col: 'col-5',
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
    dec: 'color:black',
    col: 'col-md-5',
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
    type: 'textarea',
    id: 'txAdd',
    class: 'form-control',
    label: 'Address',
    dec: 'color:black',
    col: 'col-md-6',
    row: '1',
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
    id: 'txMob',
    class: 'form-control',
    label: 'Mobile.no',
    dec: 'color:black',
    col: 'col-5',
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
    label: '*Email',
    dec: 'color:black',
    col: 'col-md-5',
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
    label: '*Password',
    dec: 'color:black',
    col: 'col-md-5',
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
    dec: 'color:black',
    col: 'col-md-5',
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
    type: 'time',
    id: 'txtDob',
    class: 'form-control',
    label: 'Date Of Birth',
    dec: 'color:black',
    col: 'col-md-5',
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
    type: 'checkbox',
    id: 'btnCheck',
    class: '',
    label: 'Select Your Gender',
    col: 'col-8',
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
},{
    type: 'file-upload',
    id: 'btnCheck',
    class: '',
    label: 'Please Upload Mentioned doc.',
    col: 'col-8',
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
}, {
    type: 'Rating',
    id: 'btnCheck',
    class: '',
    label: 'Rate The Clinic',
    col: 'col-8',
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
}, {
    type: 'signature',
    id: '',
    class: '',
    label: '',
    col: 'col-8',
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
    type: 'button',
    id: 'btnSave',
    class: 'btn btn-primary',
    col: 'col-6',
    label: 'Save'
}];


let frmHTML = '';
for (let i = 0; i < frmJson.length; i++) {
    console.log((i + 1) + "coming for" + frmJson[i].type);


    if (frmJson[i].type == 'text' || frmJson[i].type == 'email' || frmJson[i].type == 'date' || frmJson[i].type == 'password') {
        console.log("come for input");
        frmHTML = `${frmHTML}
        <div class="form-group ${frmJson[i].col} p-2">
        <label for="${frmJson[i].id}" style="${frmJson[i].dec}">${frmJson[i].label}</label>
        <input type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}" style="${frmJson[i].dec}"/>
        <div id="${frmJson[i].id}_err" class="d-none invalid-feedback"></div>
        </div>`;
    }
    if (frmJson[i].type == 'button') {
        console.log("come for button");
        frmHTML = `${frmHTML}<br><br>
        <div class="${frmJson[i].col} p-2">
        <button type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}" onclick="onsaveclick()">${frmJson[i].label}</button>
        </div>`;
    } 
    if (frmJson[i].type == 'textarea') {
        console.log("come for textarea");
        frmHTML = `${frmHTML}
        <div class="mb-3 ${frmJson[i].col}">
        <label for="exampleFormControlTextarea1" style="${frmJson[i].dec}" class="form-label" style="${frmJson[i].dec}">${frmJson[i].label}</label>
        <textarea class="form-control" id="${frmJson[i].id}"  style="${frmJson[i].dec}" rows="${frmJson[i].row}"></textarea>
      </div><div id="${frmJson[i].id}_err" class="d-none invalid-feedback"></div>
      </div>`
    }

    if (frmJson[i].type == 'checkbox' || frmJson[i].type == 'radio') {
        console.log("come for checkbox");
        frmHTML = `${frmHTML}<div class="form-group p-4">
        <h5> ${frmJson[i].label}</h5>
        <div>`
        let postData = ""
        for (let j = 0; j < frmJson[i].Option.length; j++) {
            console.log(j, frmJson[i].Option[j]);
            const newData = `<section>
            <div class="form-check ${frmJson[i].col} p-1">
            <label for="flexCheckDefault" style="${frmJson[i].dec}">${frmJson[i].Option[j]}</label>
            <input type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}" style="${frmJson[i].dec}"/>
            <div id="${frmJson[i].id}_err" class="d-none invalid-feedback"></div>
            </div>
            </section>`

            postData = `${postData} ${newData} `
        }

        frmHTML = `${frmHTML} ${postData}`
    }
    if (frmJson[i].type == 'file-upload') {
        frmHTML = `${frmHTML}
        <br>
        <label class="form-label" for="customFile">Default file input example</label>
        <input type="file" class="form-control" id="file"/>`
    }
    if (frmJson[i].type == 'Rating') {
        frmHTML = `${frmHTML}<br><h5> ${frmJson[i].label}</h5>
        <div class="rating p-2">
        <br>
        <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
        <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
        <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
        <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
        <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
        <div>`
    }
    if (frmJson[i].type == 'time') {
        frmHTML = `${frmHTML}
        <div class="form-group p-3">
        <label for="appt"><h5>Select a time:</h5></label><br>
        <input type="time" id="appt" name="appt"> 
        </div>`
    }
    if (frmJson[i].type == 'drop-down') {
        frmHTML = `${frmHTML}<section>
        <div class="btn-group float-end">
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
      </section>`
    }
    if(frmJson[i].type == 'signature'){
        frmHTML = `${frmHTML}<br><br><br>
        <section class="signature-component">
        <h5>Signature</h5>
        <canvas id="signature-pad" width="400" height="200"></canvas>
      
        <div>
          <button id="clear">Clear</button>
        </div>
      </section>
      <script src="app.js"></script>`
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
        Date_of_birthday: document.getElementById('txtDob').value
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