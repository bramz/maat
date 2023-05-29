#!/bin/bash

# Maat - an organization management tool for everyone! (This is a work in progress!)

# This install script was writen for a WSL2 Ubuntu 20.04 setup as a normal user with sudo privileges.
# Linux DESKTOP-IV7J3DK 5.15.90.1-microsoft-standard-WSL2 #1 SMP Fri Jan 27 02:56:13 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux
# I have not written anything for support on any other platform or setup yet, so feel free to use it.
# But there are likely to be compatability issues and this script and application may not work for you.
# If any issues occur you may open an issue or github or contact me @ managingbr8@gmail.com


## Frontend installation
# Update apt packages
sudo apt update
sudo apt upgrade

# Install node version manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# The following is set into your .bashrc profile, if you add this to .bashrc it will be added to every new terminal session.
# Usage instructions are also given at the end of the nvm install script.

# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


# Check NVM version (0.39.3) and list available installed versions or defaults versions.
nvm --version ; nvm list

# Install node v18.16.0 with nvm, this will create an alias, it should be called the following.
# Creating default alias: default -> lts/* (-> v18.16.0)
nvm install --lts

# Check node version should be v18.16.0
node -v

# Use latest LTS version of node using nvm
# If the lts version is not installed we can install it manually with (nvm install --lts)
nvm use --lts

# Check node and npm versions should be 18.16.0 and 9.5.1
node -v
npm -v

# Install angular cli globally
npm install -g @angular/cli

# Check angular cli version installed
ng --version

# Use npm to install angular cli globally
npm install -g @angular/cli 

# Run ng --version to check our angular version 16.0.3 has been installed,
# node version is 18.16.0 and npm version is 9.5.1. OS: linux x64
# Angular CLI: 16.0.3
# Node: 18.16.0
# Package Manager: npm 9.5.1
# OS: linux x64
# Package                      Version
# ------------------------------------------------------
# @angular-devkit/architect    0.1600.3 (cli-only)
# @angular-devkit/core         16.0.3 (cli-only)
# @angular-devkit/schematics   16.0.3 (cli-only)
# @schematics/angular   



# To fix deprecation warning for angular cli install.
# Run: npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs
npm install -g @npmcli/fs

# Add the following to the dependency tree in matt/manager directory for angular features being used.
# Run: npm install @types/node @angular/material angular-material-calendar
# This may throw some warnings in regard

# Generate new angular app (ng new manager) I decided to call it manager as that is what the app essentially does.
# Answer y to add angular routing
# Choose CSS for stylesheet format option.
# A new angular app should generate in the manager directory.
# npm WARN deprecated angular-aria@1.4.14: For the actively supported Angular, see https://www.npmjs.com/package/@angular/core. AngularJS support has officially ended. For extended AngularJS support options, see https://goo.gle/angularjs-path-forward.
# npm WARN deprecated angular-sanitize@1.4.14: For the actively supported Angular, see https://www.npmjs.com/package/@angular/core. AngularJS support has officially ended. For extended AngularJS support options, see https://goo.gle/angularjs-path-forward.
# npm WARN deprecated angular-animate@1.4.14: For the actively supported Angular, see https://www.npmjs.com/package/@angular/core. AngularJS support has officially ended. For extended AngularJS support options, see https://goo.gle/angularjs-path-forward.
# npm WARN deprecated angular@1.4.14: For the actively supported Angular, see https://www.npmjs.com/package/@angular/core. AngularJS support has officially ended. For extended AngularJS support options, see https://goo.gle/angularjs-path-forward.
# npm WARN deprecated angular-material@0.11.4: For the actively supported Angular Material, see https://www.npmjs.com/package/@angular/material. AngularJS support has officially ended. For extended AngularJS support options, see https://goo.gle/angularjs-path-forward.

# added 61 packages, and audited 1007 packages in 29s

# 105 packages are looking for funding
#   run `npm fund` for details

# 2 vulnerabilities (1 moderate, 1 high)

# To address all issues, run:
#   npm audit fix

# Run `npm audit` for details.
# (base) brock@DESKTOP-IV7J3DK:~/maat/manager$ npm audit fix

# up to date, audited 1007 packages in 3s

# 105 packages are looking for funding
#   run `npm fund` for details

# # npm audit report

# angular  *
# Severity: high
# Cross-Site Scripting via JSONP - https://github.com/advisories/GHSA-28hp-fgcr-2r4h
# XSS via JQLite DOM manipulation functions in AngularJS - https://github.com/advisories/GHSA-5cp4-xmrw-59wf
# AngularJS Cross-site Scripting due to failure to sanitize `xlink.href` attributes - https://github.com/advisories/GHSA-r5fx-8r73-v86c
# Angular (deprecated package) Cross-site Scripting - https://github.com/advisories/GHSA-prc3-vjfx-vhm9
# Prototype Pollution in angular - https://github.com/advisories/GHSA-89mq-4x47-5v83
# Cross site scripting in Angular - https://github.com/advisories/GHSA-mhp6-pxh8-r675
# angular vulnerable to regular expression denial of service via the angular.copy() utility - https://github.com/advisories/GHSA-2vrf-hf26-jrp5
# angular vulnerable to regular expression denial of service via the $resource service - https://github.com/advisories/GHSA-2qqx-w9hr-q5gx
# angular vulnerable to regular expression denial of service via the <input type="url"> element - https://github.com/advisories/GHSA-qwqh-hm9m-p5hr
# fix available via `npm audit fix --force`
# Will install angular-material-calendar@0.2.3, which is a breaking change
# node_modules/angular
#   angular-material-calendar  >=0.2.4
#   Depends on vulnerable versions of angular
#   node_modules/angular-material-calendar

# 2 vulnerabilities (1 moderate, 1 high)

# To address all issues (including breaking changes), run:
#   npm audit fix --force
# (base) brock@DESKTOP-IV7J3DK:~/maat/manager$ npm audit fix --force
# npm WARN using --force Recommended protections disabled.
# npm WARN audit Updating angular-material-calendar to 0.2.3, which is a SemVer major change.
# npm WARN deprecated angular@1.8.3: For the actively supported Angular, see https://www.npmjs.com/package/@angular/core. AngularJS support has officially ended. For extended AngularJS support options, see https://goo.gle/angularjs-path-forward.

# changed 2 packages, and audited 1007 packages in 3s

# 105 packages are looking for funding
#   run `npm fund` for details

# # npm audit report

# angular  *
# Severity: moderate
# Angular (deprecated package) Cross-site Scripting - https://github.com/advisories/GHSA-prc3-vjfx-vhm9
# angular vulnerable to regular expression denial of service (ReDoS) - https://github.com/advisories/GHSA-m2h2-264f-f486
# angular vulnerable to regular expression denial of service via the angular.copy() utility - https://github.com/advisories/GHSA-2vrf-hf26-jrp5
# angular vulnerable to regular expression denial of service via the $resource service - https://github.com/advisories/GHSA-2qqx-w9hr-q5gx
# angular vulnerable to regular expression denial of service via the <input type="url"> element - https://github.com/advisories/GHSA-qwqh-hm9m-p5hr
# fix available via `npm audit fix`
# node_modules/angular

# 1 moderate severity vulnerability

# To address all issues, run:
#   npm audit fix
# After realization that this was not going to fix the deprecated packages vulnerabilities,
# I decided to just go about with building the application from here.

# We can serve the app now by running (ng serve) see angular readme for more details.


## Backend installation

# Install postgres
# Uncomment for first time installation.
# sudo apt install postgresql postgresql-contrib

# Start postgres service (for future deployment features)
# systemd usage (not suppored on WSL)
# sudo systemctl start postgresql.service

# Start postgres service
# sysvinit usage
sudo service postgresql start

# Check postgres service status
sudo service postgresql status
# Returns: 12/main (port 5432): online

# When first running we must uncomment this sudo command to create the user and database.
# This will be added to the configuration for the postgres data source.
# The data source will be used in the express api we use.
# Another data source option will be provided with our golang api.
# Uncomment: sudo -u postgres createuser -s $(whoami); createdb maat;
