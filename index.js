let frmJson = [{
    type: 'text',
    id: 'txFName',
    class: 'form-control',
    label: 'First Name',
    dec: 'color:red',
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
    dec: 'color:red',
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
    id: 'txLName',
    class: 'form-control',
    label: 'Address',
    dec: 'color:red',
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
    id: 'txAdd',
    class: 'form-control',
    label: 'Mobile.no',
    dec: 'color:red',
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
    dec: 'color:red',
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
    dec: 'color:red',
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
    dec: 'color:red',
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
    type: 'radio',
    id: 'btnCheck',
    class: '',
    label: 'Accept Terms & Condition',
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
        <div class="form-group ${frmJson[i].col}">
        <label for="${frmJson[i].id}" style="${frmJson[i].dec}">${frmJson[i].label}</label>
        <input type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}" style="${frmJson[i].dec}"/>
        <div id="${frmJson[i].id}_err" class="d-none invalid-feedback"></div>
        </div>`;
    }
    if (frmJson[i].type == 'button') {
        console.log("come for button");
        frmHTML = `${frmHTML}
        <div class="${frmJson[i].col}">
        <button type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}" onclick="onsaveclick()">${frmJson[i].label}</button>
        </div>`;
    }
    if (frmJson[i].type == 'textarea') {
        console.log("come for textarea");
        frmHTML = `${frmHTML}
        <div class="mb-3 ${frmJson[i].col}">
        <label for="exampleFormControlTextarea1" style="${frmJson[i].dec}" class="form-label" style="${frmJson[i].dec}">${frmJson[i].label}</label>
        <textarea class="form-control" id="exampleFormControlTextarea1"  style="${frmJson[i].dec}" rows="${frmJson[i].row}"></textarea>
      </div>`
    }

    if (frmJson[i].type == 'checkbox' || frmJson[i].type == 'radio') {
        console.log("come for checkbox");
        let postData = ""
        for (let j = 0; j < frmJson[i].Option.length; j++) {
            console.log(j, frmJson[i].Option[j]);
            const newData = `
            <div class="form-check ${frmJson[i].col}">
            <input class="form-check-input" type="${frmJson[i].type}" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                ${frmJson[i].Option[j]}
            </label>
          </div>`

            postData = `${postData} ${newData} `
        }

        frmHTML = `${frmHTML} ${postData} `
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
                    } else {
                        if (frmJson[i].type == 'email') {
                            if (!getControl(frmJson[i].id).value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                                getErrMsgControl(frmJson[i].id).innerHTML = frmJson[i].validateType.rule.message.replace('{LABEL}', frmJson[i].label);
                                isFrmValid = false;
                                break;
                            } else {
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