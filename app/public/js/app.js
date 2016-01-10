"use strict";
var app = angular.module('dashboard', []);
app.controller('DashboardController', function($scope){
	this.sensors = sensors;
    console.log($scope);
});

app.controller('SidebarController', function(){
	this.tab = 1;
	this.selectTab = function (setTab) {
		this.tab = setTab;
	};

	//Is it active? = set class
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}

});

// DO THIS SERVER SIDE AS IN client.sensor = getServerSensorJson();
var sensors = [
	{
		name: 'Tempeture',
		icon: '',
		voltage: 0,
		celsius: 0,
		farenheit: 0,
	},
	{
		name: 'Light level',
		icon: ''
	},
		{
		name: 'Moisture',
		icon: ''
	}
];

var socket = io.connect();
socket.on('sensorData', function (data) {
	console.log(data);
});
	/*
	<section class="tab" ng-controller="TabController as tab">
        <ul class="nav nav-pills">
          <li ng-class="{ active: tab.isSet(1) }">            
            <a href ng-click="tab.setTab(1)">Description</a></li>
          <li ng-class="{ active: tab.isSet(2) }">
            <a href ng-click="tab.setTab(2)">Specs</a></li>
          <li ng-class="{ active: tab.isSet(3) }">
            <a href ng-click="tab.setTab(3)">Reviews</a></li>
        </ul>
        <div ng-show="tab.isSet(1)">
          <h4>Description</h4>
          <blockquote>{{product.description}}</blockquote>
        </div>
    */
