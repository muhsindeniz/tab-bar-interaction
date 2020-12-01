"use strict";

$(document).ready(function () {
  $("#home").css({
    'filter': 'grayscale(100%)'
  });
  $("#likes").css({
    'filter': 'grayscale(100%)'
  });
  $("#search").css({
    'filter': 'grayscale(100%)'
  });
  $("#user").css({
    'filter': 'grayscale(100%)'
  });
  $("#home").click(function () {
    $(".section").css({
      'top': '47%',
      'left': '41.5%'
    });
    $("#home").css({
      'filter': 'grayscale(0%)',
      'transform': 'scale(1.8)'
    });
    $("#likes").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#search").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#user").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
  });
  $("#likes").click(function () {
    $(".section").css({
      'top': '47%',
      'left': '47%'
    });
    $("#home").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#likes").css({
      'filter': 'grayscale(0%)',
      'transform': 'scale(1.8)'
    });
    $("#search").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#user").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
  });
  $("#search").click(function () {
    $(".section").css({
      'top': '47%',
      'left': '52.5%'
    });
    $("#home").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#likes").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#search").css({
      'filter': 'grayscale(0%)',
      'transform': 'scale(1.8)'
    });
    $("#user").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
  });
  $("#user").click(function () {
    $(".section").css({
      'top': '47%',
      'left': '58%'
    });
    $("#home").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#likes").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#search").css({
      'filter': 'grayscale(100%)',
      'transform': ''
    });
    $("#user").css({
      'filter': 'grayscale(0%)',
      'transform': 'scale(1.8)'
    });
  });
});