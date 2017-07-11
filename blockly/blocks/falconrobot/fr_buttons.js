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

 goog.provide('Blockly.Blocks.fr_buttons');

 goog.require('Blockly.Blocks');
 goog.require('Blockly.Types');

 /** Common HSV hue for all blocks in this category. */
 Blockly.Blocks.fr_buttons.HUE = 150;

Blockly.Blocks['fr_button_0_config'] = {
 /**
  * Block for the Button0 generator configuration.
  * @this Blockly.Block
  */
 init: function() {
   this.setHelpUrl('https://github.com/RoboCore/FalconRobot');

   this.setColour(Blockly.Blocks.fr_buttons.HUE);

   this.appendDummyInput()
       .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_BUTTON_0_SETUP));

   this.appendDummyInput()
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Msg.FR_BUTTON_0_PIN)
       .appendField(new Blockly.FieldDropdown(
           Blockly.Arduino.Boards.selected.digitalPins), 'FR_BUTTON_0_PIN');

   this.setTooltip(Blockly.Msg.FR_BUTTON_0_SETUP_TIP);

 },
 /**
  * Updates the content of the the pin related fields.
  * @this Blockly.Block
  */
 updateFields: function() {
   Blockly.Boards.refreshBlockFieldDropdown(
       this, 'FR_BUTTON_0_PIN', 'digitalPins');
 }
};

Blockly.Blocks['fr_button_1_config'] = {
 /**
  * Block for the Button1 generator configuration.
  * @this Blockly.Block
  */
 init: function() {
   this.setHelpUrl('https://github.com/RoboCore/FalconRobot');

   this.setColour(Blockly.Blocks.fr_buttons.HUE);

   this.appendDummyInput()
       .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_BUTTON_1_SETUP));

   this.appendDummyInput()
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Msg.FR_BUTTON_1_PIN)
       .appendField(new Blockly.FieldDropdown(
           Blockly.Arduino.Boards.selected.digitalPins), 'FR_BUTTON_1_PIN');

   this.setTooltip(Blockly.Msg.FR_BUTTON_1_SETUP_TIP);

 },
 /**
  * Updates the content of the pin related fields.
  * @this Blockly.Block
  */
 updateFields: function() {
   Blockly.Boards.refreshBlockFieldDropdown(
       this, 'FR_BUTTON_1_PIN', 'digitalPins');
 }
};

Blockly.Blocks['fr_button_0_read'] = {
 /**
  * Block for read the button0 state.
  * @this Blockly.Block
  */
 init: function() {
   this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
   this.setColour(Blockly.Blocks.fr_buttons.HUE);
   this.appendDummyInput()
       .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_BUTTON_0_READ));

   this.setInputsInline(true);
   this.setPreviousStatement(false);
   this.setOutput(true);
   this.setNextStatement(false);
   this.setTooltip(Blockly.Msg.FR_BUTTON_0_READ_TIP);
 }
};

Blockly.Blocks['fr_button_1_read'] = {
  /**
   * Block for read the button1 state.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_buttons.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_BUTTON_1_READ));

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.FR_BUTTON_1_READ_TIP);
  }
};
