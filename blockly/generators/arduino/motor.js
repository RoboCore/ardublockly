/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Motor functions blocks.
 */

/**
 * Created by RoboCore
 * Based on Blockly.Arduino.stteper
 */

'use strict';

goog.provide('Blockly.Arduino.motor');

goog.require('Blockly.Arduino');


/**
 * Code generator for the motor generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y), speed(A) and instance
 * name (B).
 * Arduino code: #include <Motor.h>
 *               Motor B(X, Y);
 *               setup() { B.setSpeed(A); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['motor_config'] = function(block) {
  var pinSpeed = block.getFieldValue('MOTOR_SPEED_PIN');
  var pinDirection = block.getFieldValue('MOTOR_DIRECTION_PIN');
  var pinType = Blockly.Arduino.PinTypes.MOTOR;
  var motorName = block.getFieldValue('MOTOR_NAME');

  Blockly.Arduino.reservePin(block, pinSpeed, pinType, 'Motor');
  Blockly.Arduino.reservePin(block, pinDirection, pinType, 'Motor');

  Blockly.Arduino.addInclude('motor', '#include <Motor.h>');

  var globalCode = 'Motor motor_' + motorName + '(' + pinDirection + ', ' +
      pinSpeed + ');';
  Blockly.Arduino.addDeclaration(motorName, globalCode);

  return '';
};

/**
 * Code generator for set the motor instance (X) to a number a speed (Y) at
 * a direction (Z).
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { X.set(Y, Z) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['motor_set'] = function(block) {
  var motorInstanceName = 'motor_' + block.getFieldValue('MOTOR_NAME');
  var motorDirection = block.getFieldValue('MOTOR_DIRECTION');
  var motorSpeed = Blockly.Arduino.valueToCode(block, 'MOTOR_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = motorInstanceName + '.set(' + motorDirection + ', ' +
      motorSpeed +');\n';
  return code;
};

/**
 * Code generator for set the motor instance (X) to a number direction (Y).
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { X.set(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['motor_set_direction'] = function(block) {
  var motorInstanceName = 'motor_' + block.getFieldValue('MOTOR_NAME');
  var motorDirection = block.getFieldValue('MOTOR_DIRECTION');
  var code = motorInstanceName + '.setDirection(' + motorDirection + ');\n';
  return code;
};

/**
 * Code generator for set the motor instance (X) to a number a speed (Y).
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { X.set(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['motor_set_speed'] = function(block) {
  var motorInstanceName = 'motor_' + block.getFieldValue('MOTOR_NAME');
  var motorSpeed = Blockly.Arduino.valueToCode(block, 'MOTOR_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = motorInstanceName + '.setSpeed(' + motorSpeed +');\n';
  return code;
};
