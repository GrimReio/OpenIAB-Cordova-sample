/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    SKU_PRODUCT:"sku_product",
    SKU_CONS:"sku_cons",
    SKU_SUB:"sku_sub",

    initSuccess: function()
    {
        console.log("Init.SUCCESS");

        var purchaseButton = document.getElementById('btn_purchase');
        purchaseButton.disabled = false;

        var consumeButton = document.getElementById('btn_consume');
        consumeButton.disabled = false;       
    },
    initFail: function(error)
    {
        console.log("Init.FAIL: " + error.message);
    },
    purchaseSuccess: function()
    {
        console.log("Purchase.SUCCESS");
    },
    purchaseFail: function(error)
    {
        console.log("Purchase.FAIL: " + error.message);
    },
    consumeSuccess: function()
    {
        console.log("Consume.SUCCESS");
    },
    consumeFail: function(error)
    {
        console.log("Consume.FAIL: " + error.message);
    },


    // Application Constructor
    initialize: function() 
    {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() 
    {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() 
    {
        app.receivedEvent('deviceready');

		var initButton = document.getElementById('btn_init');
        var purchaseButton = document.getElementById('btn_purchase');
        var consumeButton = document.getElementById('btn_consume');
        var testButton = document.getElementById('btn_test');

        initButton.onclick = function() { openiab.init(app.initSuccess, app.initFail, [ app.SKU_PRODUCT, app.SKU_CONS, app.SKU_SUB ]); }
        purchaseButton.onclick = function() { openiab.purchaseProduct(app.purchaseSuccess, app.purchaseFail, app.SKU_CONS); }
        consumeButton.onclick = function() { openiab.consume(this.sku, app.consumeSuccess, app.consumeFail, app.SKU_CONS); }
        testButton.onclick = function() { openiab.purchaseProduct(app.purchaseSuccess, app.purchaseFail, "android.test.purchased"); }

        initButton.disabled = false;
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) 
    {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
