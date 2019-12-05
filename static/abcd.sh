#!/usr/bin/env bash
rsync -chavzrP --stats --delete /usr/local/var/www/resume/* root@159.65.151.86:/var/www/html/resume/
