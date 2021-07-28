$(function () {
    class Kisi {
        constructor(fiyat, sinif) {
            this.fiyat = fiyat;
            this.sinif = sinif;
            console.log('kisi olustu ' + fiyat + sinif);
        }
        indirim(oran) {
            const indirim = this.fiyat * oran / 100;
            this.fiyat = this.fiyat - indirim;
            $('.sonuc').text(this.fiyat);
        }
        append(name) {
            $('.sonuc').append(`<br> Hadi yine iyisin ` + name + `!`);
        }
    }
    class Ogrenci extends Kisi {
        hesapla() {
            this.indirim(30);
            this.append('ogrenci');
        }

    }
    class Ogretmen extends Kisi {
        hesapla() {
            this.indirim(20);
            this.append('ogretmen adam');
        }
    }
    class Duz extends Kisi {
        hesapla() {
            this.indirim(10);
            this.append('duz adam');
        }
    }


    let hesapla = $('.hesapla');
    hesapla.click(function () {
        let val = $('.input').prop('value');
        let tur = $('.select').prop('selectedIndex');
        if (tur == 0) {
            let kisi = new Ogrenci(val, tur);
            kisi.hesapla();
        }
        if (tur == 1) {
            let kisi = new Ogretmen(val, tur);
            kisi.hesapla();
        }
        if (tur == 2) {
            let kisi = new Duz(val, tur);
            kisi.hesapla();
        }

    })
});







