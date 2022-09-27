#!/bin/bash

# Install node version manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash install.sh

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# Install node latest LTS
nvm install --lts

# Install yarn
npm install yarn

# Install postgres
sudo apt install postgresql postgresql-contrib

# Start postgres service

# systemd usage (not suppored on WSL)
#sudo systemctl start postgresql.service

# sysvinit usage
sudo service postgresql start
sudo -u postgres createuser -s $(whoami); createdb maat;
