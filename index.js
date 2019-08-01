document.addEventListener('DOMContentLoaded', function () {
    let pr = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'a.json');
        xhr.responseType = 'json';
        xhr.addEventListener('load', function () {
            if (!xhr.response || !xhr.response.q) {
                reject('Error!');
                return;
            }
            resolve(xhr.response.q);
        });
        xhr.send();
    });
    pr.then(function (q) {
        document.getElementById('promise_out').innerText = q;
    }).catch(function (r) {
        let el = document.createElement('span');
        el.style.color = 'red';
        el.innerText = r;
        document.getElementById('promise_out').appendChild(el);
    });
    let fpr = fetch('c.json');
    fpr.then(function (b) {
        return b.json();
    }).then(function (j) {
        if (!j || !j.q) {
            return Promise.reject('Error!');
        }
        document.getElementById('fetch_out').innerText = j.q;
    }).catch(function (r) {
        let el = document.createElement('span');
        el.style.color = 'red';
        el.innerText = r;
        document.getElementById('fetch_out').appendChild(el);
    });
});