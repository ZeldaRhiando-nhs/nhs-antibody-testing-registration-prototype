const express = require('express')
const router = express.Router()


// Version 1 - Lite registration - test place route

router.post('/prereg/v1/action6/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']
  if (testPlace == "home") {
    res.redirect('/prereg/v1/enter-barcode')
  } else {
    res.redirect('/prereg/v1/find-test-site')
  }

})

// Version 1 - Lite Registration - Ethnic group route

router.post('/prereg/v1/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/prereg/v1/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/prereg/v1/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/prereg/v1/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/prereg/v1/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/prereg/v1/ethnic-background-another')
  } else {
    res.redirect('/prereg/v1/do-you-have-symptoms')
  }

})

// Version 1 - Lite Registration - Country route

router.post('/prereg/v1/action6/country', function (req, res) {
  let country = req.session.data['country']
  if (country == "Northern Ireland"){
    res.redirect('/prereg/v1/address')
  } else {
    res.redirect('/prereg/v1/postcode')
  }

})

// Version 1 - Lite Registration - NHS number known route

router.post('/prereg/v1/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/prereg/v1/nhs-number')
  } else {
    res.redirect('/prereg/v1/check-your-answers')
  }

})


router.post('/prereg/v1/test/type', function (req, res) {
  let answer = req.session.data['poolTestType']
  if (answer == "Yes"){
    res.redirect('/prereg/v1/test/check-kit')
  } else {
    res.redirect('/prereg/v1/test/how-took')
  }

})

router.post('/prereg/v1/who', function (req, res) {
  let answer = req.session.data['prWho']
  if (answer == "myself"){
    res.redirect('/prereg/v1/login/have-email')
  } else {
    res.redirect('/prereg/v1/how-test-pass-works')
  }

})


router.post('/prereg/v1/questions/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/prereg/v1/questions/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/prereg/v1/questions/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/prereg/v1/questions/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/prereg/v1/questions/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/prereg/v1/questions/ethnic-background-another')
  } else {
    res.redirect('/prereg/v1/questions/currently-in-work')
  }

})



// Version 1 - Lite Registration lateral flow with Accounts - Currently in work route

router.post('/prereg/v1/questions/action9/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes, they travel to a workplace" || inWork == "Yes, I travel to a workplace"){
    res.redirect('/prereg/v1/questions/industry')
  } else if (inWork == "Yes, they go to nursery, school, college or university" || inWork == "Yes, I go to nursery, school, college or university"){
    res.redirect('/prereg/v1/questions/study-grade')
  } else {
    res.redirect('/prereg/v1/questions/country')
  }

})


router.post('/prereg/v1/questions/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/prereg/v1/questions/nhs-number')
  } else {
    res.redirect('/prereg/v1/questions/check-your-answers')
  }

})


module.exports = router
