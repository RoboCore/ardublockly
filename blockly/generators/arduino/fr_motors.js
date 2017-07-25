/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for Motors of RoboCore Falcon Robot Library
 */

/**
 * Created by RoboCore
 * Based on Blockly.Arduino.stteper
 */

'use strict';

goog.provide('Blockly.Arduino.fr_motors');

goog.require('Blockly.Arduino');


/**
 * Code generator for the motor generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y), speed(A) and instance
 * name (B).
 * Arduino code: #include <FalconRobot.h>
 *               FalconRobotMotors motors(X, Y);
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['fr_motors_config'] = function(block) {
  var pinSpeed1 = block.getFieldValue('FR_MOTORS_SPEED_PIN_1');
  var pinSpeed2 = block.getFieldValue('FR_MOTORS_SPEED_PIN_2');
  var pinDirection1 = block.getFieldValue('FR_MOTORS_DIRECTION_PIN_1');
  var pinDirection2 = block.getFieldValue('FR_MOTORS_DIRECTION_PIN_2');
  var pinTypeSpeed = Blockly.Arduino.PinTypes.PWM;
  var pinTypeDirection = Blockly.Arduino.PinTypes.OUTPUT;

  Blockly.Arduino.reservePin(block, pinSpeed1, pinTypeSpeed, Blockly.Msg.FR_MOTORS);
  Blockly.Arduino.reservePin(block, pinSpeed2, pinTypeSpeed, Blockly.Msg.FR_MOTORS);
  Blockly.Arduino.reservePin(block, pinDirection1, pinTypeDirection, Blockly.Msg.FR_MOTORS);
  Blockly.Arduino.reservePin(block, pinDirection2, pinTypeDirection, Blockly.Msg.FR_MOTORS);

  Blockly.Arduino.addInclude('FalconRobot', '#include <FalconRobot.h>');

  var globalCode = 'FalconRobotMotors motors' + '(' + pinSpeed1 + ', ' +
      pinDirection1 + ', ' + pinSpeed2 + ', ' + pinDirection2 + ');';

  Blockly.Arduino.addDeclaration(Blockly.Msg.FR_MOTORS, globalCode);

  return '';
};

/**
 * Code generator for stop the motors
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { motors.stop() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_stop'] = function(block) {
  var code = 'motors' + '.stop();\n';
  return code;
};

/**
 * Code generator for stop the left motor
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { motors.leftStop() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_stop_left'] = function(block) {
  var code = 'motors' + '.leftStop();\n';
  return code;
};

/**
* Code generator for stop the right motor
* Library info in the setHelpUrl link.
* This block requires the motor_config block to be present.
* Arduino code: loop { motors.rightStop() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_stop_right'] = function(block) {
  var code = 'motors' + '.rightStop();\n';
  return code;
};

/**
 * Code generator for drive the motors  to a number a speed (Y) at
 * a direction (Z).
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { motors.drive(Y, Z) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_drive'] = function(block) {
  var motorsDirection = block.getFieldValue('FR_MOTORS_DIRECTION');
  var motorsSpeed = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'motors' + '.drive(' + motorsSpeed + ', ' + motorsDirection +');\n';
  return code;
};

/**
* Code generator for drive the motors  to a number a speed (X) at
* a direction (Y) per a period(Z).
* Library info in the setHelpUrl link.
* This block requires the motor_config block to be present.
* Arduino code: loop { motors.drive(X, Y, Z) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_drive_delay'] = function(block) {
  var motorsDirection = block.getFieldValue('FR_MOTORS_DIRECTION');
  var motorsSpeed = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var motorsDelay = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_DELAY',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'motors' + '.drive(' + motorsSpeed + ', ' + motorsDirection +
              ', ' + motorsDelay + ');\n';
  return code;
};

/**
* Code generator for pivot the motors  to a number a speed (X) at
* a direction (Y).
* Library info in the setHelpUrl link.
* This block requires the motor_config block to be present.
* Arduino code: loop { motors.pivot(X, Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_pivot'] = function(block) {
  var motorsDirection = block.getFieldValue('FR_MOTORS_DIRECTION');
  var motorsSpeed = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'motors' + '.pivot(' + motorsSpeed + ', ' + motorsDirection +');\n';
  return code;
};

/**
* Code generator for pivot the motors  to a number a speed (X) at
* a direction (Y) per a period(Z).
* Library info in the setHelpUrl link.
* This block requires the motor_config block to be present.
* Arduino code: loop { motors.pivot(X, Y, Z) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_pivot_delay'] = function(block) {
  var motorsDirection = block.getFieldValue('FR_MOTORS_DIRECTION');
  var motorsSpeed = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var motorsDelay = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_DELAY',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'motors' + '.pivot(' + motorsSpeed + ', ' + motorsDirection +
              ', ' + motorsDelay + ');\n';
  return code;
};

/**
 * Code generator for drive the left motor to a number a speed (Y) at
 * a direction (Z).
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { motors.leftDrive(Y, Z) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_drive_left'] = function(block) {
  var motorsDirection = block.getFieldValue('FR_MOTORS_DIRECTION');
  var motorsSpeed = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'motors' + '.leftDrive(' + motorsSpeed + ', ' + motorsDirection +');\n';
  return code;
};

/**
 * Code generator for drive the left motor to a number a speed (X) at
 * a direction (Y) per a period (Z).
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { motors.leftDrive(X, Y, Z) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_drive_left_delay'] = function(block) {
  var motorsDirection = block.getFieldValue('FR_MOTORS_DIRECTION');
  var motorsSpeed = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var motorsDelay = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_DELAY',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'motors' + '.leftDrive(' + motorsSpeed + ', ' + motorsDirection +
              ', ' + motorsDelay + ');\n';
  return code;
};

/**
 * Code generator for set the right motor to a number a speed (Y) at
 * a direction (Z).
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { rightDrive.rightDrive(Y, Z) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_drive_right'] = function(block) {
  var motorsDirection = block.getFieldValue('FR_MOTORS_DIRECTION');
  var motorsSpeed = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'motors' + '.rightDrive(' + motorsSpeed + ', ' + motorsDirection +');\n';
  return code;
};

/**
 * Code generator for set the right motor to a number a speed (X) at
 * a direction (Y) per a period(Z).
 * Library info in the setHelpUrl link.
 * This block requires the motor_config block to be present.
 * Arduino code: loop { rightDrive.drive(X, Y, Z) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_motors_drive_right_delay'] = function(block) {
  var motorsDirection = block.getFieldValue('FR_MOTORS_DIRECTION');
  var motorsSpeed = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var motorsDelay = Blockly.Arduino.valueToCode(block, 'FR_MOTORS_DELAY',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'motors' + '.rightDrive(' + motorsSpeed + ', ' + motorsDirection +
              ', ' + motorsDelay + ');\n';
  return code;
};
