/*
 *  Copyright (c) 2005-2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */
var name;
var hps = require('/themes/default/helpers/view-asset.js');
var that = this;
/*
In order to inherit all variables in the default helper
*/
for (name in hps) {
    if (hps.hasOwnProperty(name)) {
        that[name] = hps[name];
    }
}
var fn = that.resources||function() { return {} };
var resources = function(page, meta) {
    var o = fn(page, meta);
    if (!o.css) {
        o.css = [];
    }
    if(!o.js){
        o.js = [];
    }
    if(!o.code){
        o.code = [];
    }
    o.css.push('sidepanel.css');
    o.code.push('view-details-meta.hbs');
    o.js.push('sidepanel.js');
    o.js.push('greg-page-api.js');
    o.js.push('greg-subscriptions-api.js');
    o.js.push('notes-api.js');
    o.js.push('tags-container.js');
    o.js.push('bootstrap-dialog.min.js');
    o.js.push('bootstrap-editable.js');
    o.js.push('bootstrap-multiselect.js');
    o.css.push('bootstrap/bootstrap-editable.css');
    o.css.push('bootstrap-dialog.min.css');
    o.css.push('bootstrap/bootstrap-tagsinput.css');
    o.css.push('bootstrap-multiselect.css');
    //o.css.push('styles.css');
    //o.css.push('assets.css');
    //o.js.push('jquery.event.mousestop.js');
    //o.js.push('jquery.history.js');
    //o.js.push('assets.js');
    //o.js.push('asset-helpers.js');
    return o;
};