if (frmJson[k].col.type == 'text' || frmJson[i].type == 'email' || frmJson[i].type == 'date' || frmJson[i].type == 'password') {
    console.log("come for input");
    frmHTML = `${frmHTML}
    <div class="form-group  p-2">
    <label for="${frmJson[i].id}" style="${frmJson[i].css}">${frmJson[i].label}</label>
    <input type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}" style="${frmJson[i].css}"/>
    <div id="${frmJson[i].id}_err" class="d-none invalid-feedback">
    </div>
    </div>`;
}
if (frmJson[i].type == 'button') {
    console.log("come for button");
    frmHTML = `${frmHTML}
    <div class=" p-2">
    <button type="${frmJson[i].type}" class="${frmJson[i].class} btn-lg" id="${frmJson[i].id}" onclick="onsaveclick()">${frmJson[i].label}</button>
    </div>`;
} 
if (frmJson[i].type == 'textarea') {
    console.log("come for textarea");
    frmHTML = `${frmHTML}
    <div class="form-group mb-3 ">
    <label for="exampleFormControlTextarea1" style="${frmJson[i].css}" class="form-label" style="${frmJson[i].css}">${frmJson[i].label}</label>
    <textarea class="form-control" id="${frmJson[i].id}"  style="${frmJson[i].css}" rows="${frmJson[i].row}"></textarea>
  </div><div id="${frmJson[i].id}_err" class="d-none invalid-feedback">
  </div>
  </div>`;
}

if (frmJson[i].type == 'checkbox' || frmJson[i].type == 'radio') {
    console.log("come for checkbox");
    frmHTML = `${frmHTML}<div class="form-group p-4">
    <h5> ${frmJson[i].label}</h5>
    <div>`;
    let postData = ""
    for (let j = 0; j < frmJson[i].Option.length; j++) {
        console.log(j, frmJson[i].Option[j]);
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
if(frmJson[i].type == 'signature'){
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
if(frmJson[i].type == 'recaptcha-V2'){
    frmHTML = `${frmHTML}<br>
    <br>
    <div class="form-group g-recaptcha" data-sitekey="6LfBaDolAAAAAL62L2khchXawb_8Y6B5zOfdWch2"></div>`
}
if(frmJson[i].type == 'recaptcha-V3'){
    frmHTML = `${frmHTML}<br>
    <br>
    <script src="https://www.google.com/recaptcha/api.js?render=6LdnWD8lAAAAAOqRNWXpDAVFQWGIfaPmQI42Qo08"></script>`
}
