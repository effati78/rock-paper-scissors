<h1 id="tanha-font">Tanha Font</h1>
<p>A Persian (Farsi) Font</p>
<p dir="rtl">فونت (قلم) فارسی تنها</p>
<p dir="rtl"><a href="http://rastikerdar.github.io/tanha-font/">نمایش فونت</a></p>
<p dir="rtl">با تشکر از برنامه <a href="https://fontforge.github.io">FontForge</a></p>
<p dir="rtl">بر مبنای فونت <a href="http://rastikerdar.github.io/samim-font/" dir="rtl">صمیم</a> و <a href="http://rastikerdar.github.io/vazir-font/" dir="rtl">وزیر</a></p>
<h2 id="-" dir="rtl">طریقه استفاده در صفحات وب:</h2>
<div lang="fa" dir="rtl">
کد زیر را در قسمت style یا فایل css وارد نمایید:
</div>


```css
@font-face {
    font-family: Tanha;
    src: url('Tanha.eot');
    src: url('Tanha.eot?#iefix') format('embedded-opentype'),
         url('Tanha.woff') format('woff'),
         url('Tanha.ttf') format('truetype');
    font-weight: normal;
}
```

## Install
####Arch Linux

Arch user's could use [tanha-fonts](https://aur.archlinux.org/packages/tanha-fonts/) package from [AUR](https://aur.archlinux.org/) repository to install tanha font. Use your favourite [AUR helper](https://wiki.archlinux.org/index.php/AUR_helpers) like pacaur or yaourt for installing package:

```shell
pacaur -S tanha-fonts
```
