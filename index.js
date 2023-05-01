///////////// for now this vales are fix but it will be change from api data //////////////////////////////
let mnvFormId = ``;
let bootstrapVersion = `5.2.3`;
let frmJson;
let mnvFormElement;
let drawCanvas = true;
///////////// for now this vales are fix but it will be change from api data //////////////////////////////

;let MNV = {
  createForm: function (id, url) {
    const xobj = new XMLHttpRequest();
    // true parameter denotes asynchronous
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        try {
          const apiData = JSON.parse(xobj.responseText);
          bootstrapVersion = apiData.bootstrapVersion;
          mnvFormId = apiData.mnvFormId;
          frmJson = apiData.frmJson;
          mnvFormElement = document.getElementById(`mnv_form_${mnvFormId}`);
          if (mnvFormElement) {
            parseJsonForTypes(frmJson);
          } else {
            console.debug(
              `Element with it MNV-DynamicFr not found. This element must be exist for render form.`
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    xobj.send(null);
  },
};

function parseJsonForTypes(JsonForm) {
  if (!(JsonForm instanceof Array)) {
    console.debug("Json Form is not Array", JsonForm);
    return;
  }
  JsonForm.map(function (formItem) {
    switch (formItem.type) {
      case "form":
        addClass(mnvFormElement, formItem.class);
        addCss(mnvFormElement, formItem.css);
        const titleEl = document.createElement("div");
        addClass(titleEl, 'container justify-content-around')
        // titleEl.classList.add("container");
        // titleEl.classList.add("justify-content-around");
        const h1 = document.createElement("h1");
        h1.innerHTML = formItem.title;
        titleEl.appendChild(h1);
        mnvFormElement.appendChild(titleEl);
        break;
      case "row":
        if (mnvFormElement) {
          const rowEl = document.createElement("div");
          rowEl.classList.toggle("border");
          rowEl.classList.toggle("border-danger");
          rowEl.classList.toggle("container");
          rowEl.classList.toggle("p2");
          const rowElc = document.createElement("div");
          rowElc.classList.toggle("row");
          rowEl.appendChild(rowElc);
          for (let index = 0; index < formItem.col.length; index++) {
            const colEl = document.createElement("div");
            colEl.classList.toggle("col");
            colEl.appendChild(createComponent(formItem.col[index]));
            rowElc.appendChild(colEl);
          }
          mnvFormElement.appendChild(rowEl);
        }
        break;

      default:
        break;
    }
  });
}

function addClass(el, cls = "") {
  // set calss
  cls.split(" ").map(function (cl) {
    if (cl) {
      el.classList.add(cl);
    }
  });
}

function addCss(el, css = "") {
  // set css
  css.split(/[;]/).map(function (cs) {
    if (cs) {
      const csA = cs.split(":");
      if (csA.length == 2) {
        el.style[csA[0]] = csA[1];
      }
    }
  });
}

function optionsExe(prefix = "", el, options = []) {
  // set options
  options.map(function (opt) {
    switch ([prefix, opt.type].join("-")) {
      case "button-att":
      case "textarea-att":
        el.setAttribute(opt.key, opt.val);
        break;
      case "button-role":
        if (opt.val === "submit") {
          el.setAttribute("click", "onsaveclick()");
        }
        break;
      case "radio-item":
      case "checkbox-item":
        let radioLblEl = document.createElement("span");
        radioLblEl.innerHTML = opt.key;
        radioLblEl.setAttribute("for", el.getAttribute("id"));
        el.appendChild(radioLblEl);
        let radioEl = document.createElement("input");
        radioEl.setAttribute("type", prefix);
        radioEl.setAttribute("value", opt.val);
        radioEl.setAttribute("name", `input_${el.getAttribute("id")}`);
        radioEl.setAttribute("id", opt.val);
        el.appendChild(radioEl);
        break;
      default:
        break;
    }
  });
}

function createComponent(item) {
  let comp = document.createElement("div");
  comp.classList.toggle("border");
  comp.classList.toggle("border-primary");

  switch (item.type) {
    case "text":
    case "email":
    case "date":
    case "password":
    case "number":
      comp.classList.toggle("form-group");
      // add label to form element
      const txlblEl = document.createElement("label");
      txlblEl.setAttribute("for", item.id);
      addCss(txlblEl, item.css);
      txlblEl.innerHTML = item.label;
      comp.appendChild(txlblEl);
      // end add label to form element
      // add input element to form element
      let inputEl = document.createElement("input");
      inputEl.setAttribute("type", item.type);
      inputEl.setAttribute("placeholder", item.place);
      inputEl.setAttribute("id", item.id);
      inputEl.setAttribute("onfocus", "autofocus1(id)");
      inputEl.setAttribute("onblur", "autoBlur1(id)");
      addClass(inputEl, item.class);
      addCss(inputEl, item.css);
      comp.appendChild(inputEl);
      // end add input element to form element
      const txtmsgEl = document.createElement("div");
      txtmsgEl.setAttribute("id", `${item.id}_err`);
      txtmsgEl.classList.toggle("d-none");
      txtmsgEl.classList.toggle("invalid-feedback");
      comp.appendChild(txtmsgEl);
      break;
    // End add TEXT element to form element
    case "radio":
    case "checkbox":
      comp.classList.toggle("form-group");
      comp.classList.toggle("p-1");
      const spanEl = document.createElement("span");
      spanEl.setAttribute("for", item.id);
      addCss(spanEl, item.css);
      spanEl.innerHTML = item.label;
      comp.appendChild(spanEl);
      // add radio div to form element
      let divEl = document.createElement("div");
      divEl.setAttribute("id", item.id);
      optionsExe(
        item.type === "checkbox" ? "checkbox" : "radio",
        divEl,
        item.option
      );
      addClass(divEl, item.class);
      addCss(divEl, item.css);
      //validation
      comp.appendChild(divEl);
      const radiomsgEl = document.createElement("div");
      radiomsgEl.setAttribute("id", `${item.id}_err`);
      radiomsgEl.classList.toggle("d-none");
      radiomsgEl.classList.toggle("invalid-feedback");
      comp.appendChild(radiomsgEl);
      break;
    // END add RADIO & CHECKBOX div to form element
    case "button":
      comp.classList.toggle("p-2");
      // add btn to form element
      let svBtnEL = document.createElement("button");
      svBtnEL.setAttribute("id", item.id);
      svBtnEL.setAttribute("onclick", "onsaveclick()");
      svBtnEL.classList.add("btn-lg");
      optionsExe("button", svBtnEL, item.option);
      addClass(svBtnEL, item.class);
      addCss(svBtnEL, item.css);
      svBtnEL.innerHTML = item.label;
      comp.appendChild(svBtnEL);
      break;
    // END add BTN to form element
    case "textarea":
      comp.classList.toggle("form-group");
      comp.classList.toggle("mb-3");
      // add label to form element
      const txtlbl = document.createElement("label");
      txtlbl.setAttribute("for", item.id);
      addCss(txtlbl, item.css);
      txtlbl.innerHTML = item.label;
      comp.appendChild(txtlbl);
      // end add label to form element
      // add textarea to form element
      const taEL = document.createElement("textarea");
      taEL.setAttribute("id", item.id);
      taEL.setAttribute("placeholder", item.label);
      taEL.setAttribute("onfocus", "autofocus1(id)");
      taEL.setAttribute("onblur", "autoBlur1(id)");
      optionsExe("textarea", taEL, item.option);
      addClass(taEL, item.class);
      addCss(taEL, item.css);
      comp.appendChild(taEL);

      const tamsgEl = document.createElement("div");
      tamsgEl.setAttribute("id", `${item.id}_err`);
      tamsgEl.classList.toggle("d-none");
      tamsgEl.classList.toggle("invalid-feedback");
      comp.appendChild(tamsgEl);
      break;
    // END add TEXTAREA to form element
    case "file":
      comp.classList.toggle("form-group");
      //label
      const fllblEl = document.createElement("span");
      addCss(fllblEl, item.css);
      fllblEl.innerHTML = item.label;
      comp.appendChild(fllblEl);
      //file-upload
      const fileEl = document.createElement("input");
      fileEl.setAttribute("type", item.type);
      fileEl.setAttribute("id", item.id);
      fileEl.setAttribute("onfocus", "autofocus1(id)");
      fileEl.setAttribute("onblur", "autoBlur1(id)");
      addClass(fileEl, item.class);
      fileEl.setAttribute("accept", "image/*,.jpg,.jpeg,.doc,.pdf");
      comp.appendChild(fileEl);
      //end add file-upload to form element
      // add msg element to form element
      const flmsgEl = document.createElement("div");
      flmsgEl.setAttribute("id", `${item.id}_err`);
      flmsgEl.classList.toggle("d-none");
      flmsgEl.classList.toggle("invalid-feedback");
      comp.appendChild(flmsgEl);
      break;
    // END add FILE element to form element
    case "time":
      comp.classList.toggle("cs-form");
      //label
      const timelblEl = document.createElement("label");
      addCss(timelblEl, item.css);
      timelblEl.innerHTML = item.label;
      comp.appendChild(timelblEl);
      // Time
      const timeEl = document.createElement("input");
      timeEl.setAttribute("type", item.type);
      addClass(timeEl, item.class);
      timeEl.setAttribute("id", item.id);
      timeEl.setAttribute("onfocus", "autofocus1(id)");
      timeEl.setAttribute("onblur", "autoBlur1(id)");
      comp.appendChild(timeEl);

      const timemsgEl = document.createElement("div");
      timemsgEl.setAttribute("id", `${item.id}_err`);
      timemsgEl.classList.toggle("d-none");
      timemsgEl.classList.toggle("invalid-feedback");
      comp.appendChild(timemsgEl);
      break;
    //End add TIME to form element
    case "rating":
      let fieldEl = document.createElement("fieldset");
      fieldEl.classList.toggle("rate");
      const rtspanEl = document.createElement("span");
      rtspanEl.setAttribute("for", item.id);
      addCss(rtspanEl, item.css);
      rtspanEl.innerHTML = item.label;
      fieldEl.appendChild(rtspanEl);
      for (let j = 10; j > 0; j--) {
        //STAR 5
        const starEl = document.createElement("input");
        starEl.setAttribute("type", "radio");
        starEl.setAttribute("id", `${item.id}_rating${j}`);
        starEl.setAttribute("name", "rating");
        starEl.setAttribute("value", `${j}`);
        fieldEl.appendChild(starEl);
        //label
        const rtelbleEl = document.createElement("label");
        rtelbleEl.setAttribute("for", `${item.id}_rating${j}`);
        rtelbleEl.setAttribute("class", `${j % 2 !== 0 ? "half" : ""}`);
        rtelbleEl.setAttribute("title", ` ${j * 0.5} stars`);
        fieldEl.appendChild(rtelbleEl);
      }
      comp.appendChild(fieldEl);
      break;
    //End add STAR to form element
    case "signature":
      comp.setAttribute("class", "form-group signature-component");
      //Label
      const siglblEl = document.createElement("span");
      siglblEl.setAttribute("for", item.id);
      siglblEl.innerHTML = item.label;
      comp.appendChild(siglblEl);
      //Canvas
      const canvasEl = document.createElement("canvas");
      canvasEl.setAttribute("id", item.id);
      canvasEl.setAttribute("class", "form-control");
      canvasEl.setAttribute("width", "400");
      canvasEl.setAttribute("height", "200");
      canvasEl.setAttribute("onmouseover", "signature(id)");
      comp.appendChild(canvasEl);
      //CLEAR BUTTON
      let clrBtnEL = document.createElement("button");
      clrBtnEL.setAttribute("id", "clear");
      clrBtnEL.innerHTML = "Clear";
      clrBtnEL.setAttribute("class", "btn btn-primary btn-sm");
      comp.appendChild(clrBtnEL);

      const sigmsgEl = document.createElement("div");
      sigmsgEl.setAttribute("id", `${item.id}_err`);
      sigmsgEl.classList.toggle("d-none");
      sigmsgEl.classList.toggle("invalid-feedback");
      comp.appendChild(sigmsgEl);
      break;
    //End add SIGNATURE to form Element
    default:
      break;
  }
  return comp;
}

//////////////////////////// add bootstrap css ////////////////////////////////
if (bootstrapVersion != "0.0.0") {
  let element = document.createElement("link");
  element.setAttribute("rel", "stylesheet");
  element.setAttribute("type", "text/css");
  element.setAttribute(
    "href",
    `https://cdn.jsdelivr.net/npm/bootstrap@${
      bootstrapVersion || "5.2.3"
    }/dist/css/bootstrap.min.css`
  );
  document.getElementsByTagName("head")[0].appendChild(element);
}
//////////////////////////// End add bootstrap css ////////////////////////////////

// Link add to head in html
const styleEl1 = document.createElement("link");
styleEl1.setAttribute("rel", "stylesheet");
styleEl1.setAttribute("type", "text/css");
styleEl1.setAttribute("href", "style.css");
document.getElementsByTagName("head")[0].appendChild(styleEl1);

const scriptEl = document.createElement("script");
scriptEl.setAttribute(
  "src",
  "https://cdnjs.cloudflare.com/ajax/libs/signature_pad/1.3.5/signature_pad.js"
);
document.getElementsByTagName("head")[0].appendChild(scriptEl);

// Font Awesome for Ratings
const styleEl2 = document.createElement("link");
styleEl2.setAttribute(
  "href",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
);
styleEl2.setAttribute("rel", "stylesheet");
document.getElementsByTagName("head")[0].appendChild(styleEl2);
//END

/* ===============Signature================ */
function signature(id) {
  if (drawCanvas) {
    let canvas = document.getElementById(id);
    function resizeCanvas() {
      let ratio = Math.max(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
    }
    window.onresize = resizeCanvas;
    resizeCanvas();

    signaturePad = new SignaturePad(canvas, {
      backgroundColor: "rgb(250,250,250)",
    });
    document.getElementById("clear").addEventListener("click", function () {
      signaturePad.clear();
    });
    drawCanvas = false;
  }
} //    ===============Signature Complete================ //
const Signatureurl =
  "data:image/png;base64,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";

// Form Validation
function onsaveclick() {
  let isFrmValid = true;
  // ON click data is coming
  let formObject = {};

  // Form Validation
  for (let i = 0; i < frmJson.length; i++) {
    if (frmJson[i].type == "row") {
      frmJson[i].col.forEach((field) => {
        //get THe DaTA
        if (field.type == "radio" || field.type == "checkbox") {
          formObject[field.id] = [];
          let options = field.option;
          for (let k = 0; k < options.length; k++) {
            let optval = getControl(options[k].val)?.checked;
            if (optval) {
              formObject[field.id].push(options[k].val);
            }
          }
        } //Rating Value
        else if (field.type == "rating") {
          for (let s = 0; s < 10; s++) {
            let rtval = getControl(`${field.id}_rating${s}`)?.checked;
            if (rtval) {
              formObject[field.id] = getControl(`${field.id}_rating${s}`).value;
              break;
            }
          }
        } else if (field.type == "signature") {
          let canvas = document.getElementById("signature-pad"); //get your canvas
          let image = canvas.toDataURL("image/png"); //Convert to base64
          formObject[field.id] = image;
        } else if (field.type == "file") {
          let inputElement = document.getElementById("file-upload");
          let files = inputElement.files;

          let fileinput = files[0];
          function getBase64(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
              console.log(reader.result, "nothing");
              formObject[field.id] = reader.result;
            };
          }
          getBase64(fileinput);
        } else {
          formObject[field.id] = getControl(field.id)?.value;
        }
        //End get the value
        if ("validateType" in field) {
          if (field.validateType.isValidate) {
            // first check required is true
            if (field.validateType.rule.require) {
              if (!getControl(field.id).value && field.type !== "signature") {
                isFrmValid = false;
                getControl(field.id).classList.add("is-invalid");
                getErrMsgControl(field.id).classList.remove("d-none");
                getErrMsgControl(field.id).innerHTML =
                  field.validateType.rule.message.replace(
                    "{LABEL}",
                    field.label
                  );
                return;
              } else {
                if (field.type == "email") {
                  if (
                    !getControl(field.id).value.match(
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    )
                  ) {
                    getErrMsgControl(field.id).innerHTML =
                      field.validateType.rule.message.replace(
                        "{LABEL}",
                        field.label
                      );
                    isFrmValid = false;
                    return;
                  } else {
                    getErrMsgControl(field.id).classList.add("d-none");
                    getControl(field.id).classList.remove("is-invalid");
                  }
                } else if (field.type == "signature") {
                  let canvas = document.getElementById("signature-pad"); //get your canvas
                  let image = canvas.toDataURL("image/png"); //Convert to base64
                  // console.log(image);
                  if (Signatureurl.toString() == image.toString()) {
                    getControl(field.id).classList.add("is-invalid");
                    getErrMsgControl(field.id).classList.remove("d-none");
                    getErrMsgControl(field.id).innerHTML =
                      field.validateType.rule.message.replace(
                        "{LABEL}",
                        field.label
                      );
                    isFrmValid = false;
                    return;
                  } else {
                    console.log(image, formObject);
                    formObject[field.id] = image;
                    getControl(field.id).classList.remove("is-invalid");
                    getControl(field.id).classList.add("is-valid");
                  }
                } else if (field.type == "file") {
                  let inputElement = document.getElementById("file-upload");
                  let files = inputElement.files;
                  if (files.length == 0) {
                    getErrMsgControl(field.id).innerHTML =
                      field.validateType.rule.message.replace(
                        "{LABEL}",
                        field.label
                      );
                    isFrmValid = false;
                    return;
                  } else {
                    let filename = files[0].name;

                    // getting file extension eg- .jpg,.png, etc
                    let extension = filename.substr(filename.lastIndexOf("."));

                    // define allowed file types
                    let allowedExtensionsRegx =
                      /(\.jpg|\.jpeg|\.img|\.doc|\.pdf)$/i;

                    // testing extension with regular expression
                    let isAllowed = allowedExtensionsRegx.test(extension);
                    console.log(isAllowed, "is allowed");
                    if (isAllowed) {
                      let fileinput = files[0];
                      function getBase64(file) {
                        let reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function () {
                          console.log(reader.result, "nothing");
                          formObject[field.id] = reader.result;
                        };
                      }
                      getBase64(fileinput);
                      getErrMsgControl(field.id).classList.add("d-none");
                      getControl(field.id).classList.remove("is-invalid");
                      getControl(field.id).classList.add("is-valid");
                      // file upload logic goes here...
                    }
                  }
                } else {
                  if (
                    !getErrMsgControl(field.id).classList.contains("d-none")
                  ) {
                    getErrMsgControl(field.id).classList.add("d-none");
                    getControl(field.id).classList.remove("is-invalid");
                    getControl(field.id).classList.add("is-valid");
                  }
                }
              }
            }
          }
        }
      });
    }
  }
  if (isFrmValid) {
    console.log(formObject);
  }
}
function getControl(elemId) {
  return document.getElementById(elemId);
}

function getErrMsgControl(elemId) {
  return document.getElementById(elemId + "_err");
}
//ON FOCUS
function autofocus1(Id) {
  let form = document.getElementById(Id);
  // console.log(form);
}
//ON BLUR
function autoBlur1(Id) {
  let form = document.getElementById(Id);
  if (!form.value) {
    getControl(form.id).classList.add("is-invalid");
    getErrMsgControl(form.id).classList.remove("d-none");
    return;
  } else {
    getControl(form.id).classList.remove("is-invalid");
    getControl(form.id).classList.add("is-valid");
  }
}
//END
