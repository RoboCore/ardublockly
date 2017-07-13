/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Button of RoboCore Falcon Robot Library
 *     The RoboCore Falcon Robot Library functions syntax can be
 *     found in the following URL: https://github.com/RoboCore/FalconRobot
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */

 'use strict';

 goog.provide('Blockly.Blocks.fr_button');

 goog.require('Blockly.Blocks');
 goog.require('Blockly.Types');

 /** Common HSV hue for all blocks in this category. */
 Blockly.Blocks.fr_button.HUE = 150;

Blockly.Blocks['fr_button_config'] = {
 /**
  * Block for the Button0 generator configuration.
  * @this Blockly.Block
  */
 init: function() {
   this.setHelpUrl('https://github.com/RoboCore/FalconRobot');

   this.setColour(Blockly.Blocks.fr_button.HUE);

  //  this.appendDummyInput()
  //      .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_BUTTON_SETUP));

   this.appendDummyInput()
       .appendField(Blockly.Msg.FR_BUTTON_SETUP)
       .appendField(
           new Blockly.FieldInstance('FR_BUTTON',
                                     Blockly.Msg.FR_BUTTON_DEFAULT_NAME,
                                     true, true, false),
           'FR_BUTTON_NAME');

   this.appendDummyInput()
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Msg.FR_BUTTON_PIN)
       .appendField(new Blockly.FieldDropdown(
           Blockly.Arduino.Boards.selected.digitalPins), 'FR_BUTTON_PIN');

   this.setTooltip(Blockly.Msg.FR_BUTTON_SETUP_TIP);

 },
 /**
  * Updates the content of the the pin related fields.
  * @this Blockly.Block
  */
 updateFields: function() {
   Blockly.Boards.refreshBlockFieldDropdown(
       this, 'FR_BUTTON_PIN', 'digitalPins');
 }
};


Blockly.Blocks['fr_button_read'] = {
 /**
  * Block for read the button0 state.
  * @this Blockly.Block
  */
 init: function() {
   this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
   this.setColour(Blockly.Blocks.fr_button.HUE);
  //  this.appendDummyInput()
  //      .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_BUTTON_READ));

  this.appendDummyInput()
    .appendField(Blockly.Msg.FR_BUTTON_READ)
    .appendField(
      new Blockly.FieldInstance('FR_BUTTON',
                                Blockly.Msg.FR_BUTTON_DEFAULT_NAME,
                                false, true, false),
      'FR_BUTTON_NAME');

   this.setInputsInline(true);
   this.setPreviousStatement(false);
   this.setOutput(true);
   this.setNextStatement(false);
   this.setTooltip(Blockly.Msg.FR_BUTTON_READ_TIP);
 },
 /**
  * Called whenever anything on the workspace changes.
  * It checks/warns if the selected button instance has a config block.
  * @this Blockly.Block
  */
 onchange: function() {
   if (!this.workspace) return;  // Block has been deleted.

   var instanceName = this.getFieldValue('FR_BUTTON_NAME')
   if (Blockly.Instances.isInstancePresent(instanceName, 'FR_BUTTON', this)) {
     this.setWarningText(null);
   } else {
     // Set a warning to select a valid button config block
     this.setWarningText(
       Blockly.Msg.ARD_COMPONENT_WARN1.replace(
           '%1', Blockly.Msg.FR_BUTTON).replace(
               '%2', instanceName));
   }
 }
};
