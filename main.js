// imports
const express = require('express');
const express = require('async');
const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
const fs = require('fs-extra');
const chalk = require('chalk');
const mongoose = require('mongoose');

var validator = require('validator');
require('dotenv').config();
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
// imports worked correctly
console.log("Launching..")

