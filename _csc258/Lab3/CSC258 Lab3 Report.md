<h1><center>CSC258 Lab3 Report</center></h1>
<h2><center>Tianle Wang 1006337028</center></h2>

## Part I

1. Before implementing this on Logisim, draw a schematic that shows how all of the inputs to a 7-to-1 multiplexer can be provided by a single multi-bit input source. Show how your overall design breaks down into interconnected modules and label all inputs, outputs and wires between modules. Use the following points to guide your design, and be prepared to explain your design approach to the TA as part of your preparation.![Lab3](D:\Programming\csc258\Lab3\PART1\Lab3.jpg)
   1. Assume that at the highest level, the multi-bit input is coming from the DE1-SOC switches, with the first data bit coming from SW[0]. The output of the multiplexer will be displayed on LEDR0. This is for labeling purposes only, not because we expect you to upload your design onto the DE1-SOC board.
   2. How big does the multi-bit input need to be to provide all the inputs to the 7-to-1 multiplexer? Provide your answer in your pre-lab report.
   
   Answer: Since it asks 7-to-1 multiplexer, we can think of 4+2+1 where we need 3 more variables to control. Therefore totally 10-bits are needed.
   
2. Build your circuit in Logisim, using a 7-to-1 multiplexer and the splitter components. Make sure your implementation reflects your design in the previous step, including the labels.![q2](D:\Programming\csc258\Lab3\PART1\q2.png)

3. Simulate your circuit with test vectors in Simulate > Test Vector.... Include a screenshot of the simulation output as part of your prelab report.![test](D:\Programming\csc258\Lab3\PART1\test.png)

---

## Part II

1. Draw a schematic showing your code structure with all wires, inputs and outputs labeled. Your schematic should resemble Figure 1(d), though it should also contain module and signal labels, and shows external connections to switches and LEDs (use SW3-0 for A, SW7-4 for B and SW8 for Cin. Use LEDR4-0 for the outputs). Be prepared to explain your design approach to the TA as part of your preparation.![q1](D:\Programming\csc258\Lab3\PART2\q1.jpg)
2. In Logisim, build the module for the full adder subcircuit. Once this subcircuit is complete, implement the larger module (the one resembling Figure 1(d)), which instantiates the four instances of this full adder. Name the input ports A, B and $c_{in}$, and the output ports S and $c_{out}$. Note: You should NOT use Logisim’s built-in arithmetic addition component in your full-adder. Doing so will earn you 0 marks for this part.![q2b](D:\Programming\csc258\Lab3\PART2\q2b.png)![q2a](D:\Programming\csc258\Lab3\PART2\q2a.png)
3. Simulate your 4-bit ripple-carry adder with test vectors for intelligently chosen values of A, B and $c_{in}$. Include a screenshot of your test vector results in your prelab report. Note that as circuits get more complicated, it is not practical to simulate or test every single input case (in this case, 9 input bits would result in $2^9$ test cases). This means that you must select an intelligently chosen subset of input values for your test vector. Here intelligently chosen means to find particular corner cases that exercise key aspects of the circuit. An example would be a pattern that shows that the carry signals are working, or how the circuit behaves with maximum and minimum values of A and B. Be prepared to explain why your test cases are good enough.![p2](D:\Programming\csc258\Lab3\PART2\p2.png)

---

## Part III

1. Draw a schematic showing your module structure as a block diagram with all wires, inputs and outputs labeled. Feel free to include multiple schematics if you wish to illustrate multiple levels in your design hierarchy. In particular, clearly highlight the multiplexer for your ALU as well as all inputs to this multiplexer. Be prepared to explain your design choices to the TA![q1](D:\Programming\csc258\Lab3\PART3\q1.jpg)
2. Build the Logisim module for the ALU including all high-level inputs and outputs.![operation0](D:\Programming\csc258\Lab3\PART3\operation0.png)![operationi1](D:\Programming\csc258\Lab3\PART3\operationi1.png)![operationi2](D:\Programming\csc258\Lab3\PART3\operationi2.png)![operationi3](D:\Programming\csc258\Lab3\PART3\operationi3.png)![operation4](D:\Programming\csc258\Lab3\PART3\operation4.png)![operation5](D:\Programming\csc258\Lab3\PART3\operation5.png)
3. Simulate your circuit with test vectors for a variety of input settings, ensuring the all the tests are passing. Include screenshots of your successful test output as part of your prelab.![test0](D:\Programming\csc258\Lab3\PART3\test0.png)![test1](D:\Programming\csc258\Lab3\PART3\test1.png)![test2](D:\Programming\csc258\Lab3\PART3\test2.png)![test3](D:\Programming\csc258\Lab3\PART3\test3.png)![test4](D:\Programming\csc258\Lab3\PART3\test4.png)![test5](D:\Programming\csc258\Lab3\PART3\test5.png)
4. Prepare your design and implementation for your in-lab demo.

![main](D:\Programming\csc258\Lab3\main.png)