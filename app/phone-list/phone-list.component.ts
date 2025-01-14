'use strict';

class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string;

  static $inject = ['Phone'];
  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });
