---
title: "Module 1: The Robotic Nervous System (ROS 2)"
sidebar_position: 1
description: "Learn how ROS 2 works as a robot’s communication and control middleware, including nodes, topics, services, Python bridging with rclpy, and URDF basics for humanoids."
---

# Module 1: The Robotic Nervous System (ROS 2)

This module introduces **ROS 2**, the middleware system used for robot communication and control. ROS 2 acts like the **robot’s nervous system**, allowing different parts of a robot (sensors, controllers, AI modules) to exchange data reliably and in real time.

---

## Overview: What is ROS 2?

ROS 2 (Robot Operating System 2) is a robotics framework that provides:

- A communication layer between robot software components  
- Tools for building modular robot applications  
- Support for real-time and distributed robot control  

ROS 2 is considered **middleware**, meaning it connects robot hardware (motors, sensors) with higher-level software (control algorithms, AI decision-making, planners).

---

## Core Concepts

ROS 2 systems are built using three key communication ideas:

### 1) Nodes

A **node** is an independent program that performs a specific task inside a ROS 2 system.

Examples of nodes in a humanoid robot:

- `camera_node` (publishes camera images)
- `imu_node` (publishes balance data)
- `walking_controller` (controls locomotion)
- `arm_controller` (controls arm joints)
- `speech_node` (handles voice interaction)

ROS 2 encourages building robots using many small nodes instead of one large program.

---

### 2) Topics

A **topic** is a communication channel used for continuous data streaming. Nodes can:

- **Publish** data to a topic
- **Subscribe** to data from a topic

Topics are ideal for real-time sensor and control data.

Examples:

- `/camera/image` (camera images)
- `/imu/data` (orientation and acceleration)
- `/joint_states` (robot joint angles)
- `/cmd_vel` (velocity commands)

Topic communication is typically used for high-frequency and continuous information flow.

---

### 3) Services

A **service** is a request-and-response communication method.

Services are best for actions that happen once, such as:

- resetting the robot
- calibrating sensors
- enabling/disabling a controller
- starting or stopping a behavior

Unlike topics, services are not continuous streams. They behave like a function call where one node requests an action and receives a response.

---

## Practical: Bridging Python Agents to ROS Controllers using `rclpy`

ROS 2 provides a Python client library called `rclpy`. It allows developers to create ROS 2 nodes using Python.

This enables AI and decision-making systems written in Python to directly control a robot by:

- subscribing to sensor topics
- publishing control commands
- calling services for robot actions

A Python-based agent can be used as the “brain” of the robot, while ROS 2 controllers handle low-level motor execution.

### Example Workflow

1. The Python agent subscribes to:
   - `/camera/image`
   - `/imu/data`
   - `/joint_states`

2. The agent makes a decision:
   - detect instability
   - choose a walking correction

3. The agent publishes commands to:
   - `/cmd_vel`
   - joint trajectory topics
   - controller command topics

---

## Hardware: Understanding URDF for Humanoids

URDF (Unified Robot Description Format) is the standard ROS format used to describe the robot’s physical structure.

A URDF file defines:

- links (robot body parts)
- joints (connections between links)
- joint types (revolute, prismatic, fixed)
- joint limits (min/max angles)
- collision geometry (for physics and planning)
- visual geometry (for visualization)
- inertial properties (mass, inertia)

---

### Why URDF is Important for Humanoid Robots

Humanoid robots contain many joints and complex kinematics. URDF provides a complete description of the robot’s body, enabling:

- simulation in Gazebo / Isaac Sim
- visualization in RViz
- motion planning in MoveIt
- controller configuration

URDF is essential for understanding how the robot moves and how each joint is connected.

---

## Learning Outcomes

By the end of this module, learners will be able to:

- Explain ROS 2 as a middleware system for robot control
- Understand and describe ROS 2 nodes, topics, and services
- Use `rclpy` to connect Python agents with ROS 2 controllers
- Understand the purpose and structure of URDF for humanoid robots
