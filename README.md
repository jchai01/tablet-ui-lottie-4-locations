**1. Set language**

sudo vi /etc/default/locale

LANG="en_US"

LANGUAGE="en_US:en"

**2. Remove password for sudo with visudo**

sudo visudo

Add this line at the end of the file:

$USER ALL=(ALL) NOPASSWD: ALL

**3. Remove cursor:**

sudo vi /usr/share/lightdm/lightdm.conf.d/50-xserver-command.conf

xserver-command=X -core -nocursor

**4. install nodejs and npm**

sudo apt install nodejs npm

**5. git clone the project**

git clone https://github.com/josephchai01/tablet-ui-lottie.git

git clone https://github.com/josephchai01/toilet-feedback-backend.git

**6. cd into backend, run "npm i"**


Command example:
chromium-browser --kiosk --disable-web-security --user-data-dir="~/temp" ~/tablet-ui-lottie/html/home.html
google-chrome-stable --kiosk --disable-web-security --user-data-dir="~/temp" ~/Desktop/tablet-ui-lottie/html/home.html

Run chrome with disabled web security to allow access to local files:
--disable-web-security --user-data-dir="~/temp"

https://github.com/airbnb/lottie-web
