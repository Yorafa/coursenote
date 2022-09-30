#####################################################################
#
# CSC258H5S Winter 2022 Assembly Final Project
# University of Toronto, St. George
#
# Student: Tianle Wang, 10063370928
#
# Bitmap Display Configuration:
# - Unit width in pixels: 8
# - Unit height in pixels: 8
# - Display width in pixels: 256
# - Display height in pixels: 256
# - Base Address for Display: 0x10008000 ($gp)
#
# Which milestone is reached in this submission?
# (See the assignment handout for descriptions of the milestones)
# - Milestone 1/2/3/4/5 (choose the one the applies)
#
# Which approved additional features have been implemented?
# (See the assignment handout for the list of additional features)
# 1. Display the number of living remaining
# 2. Display a death/respawn animation each time the player loses a frog.
# 3. Have objects in different rows move at different speeds.
# 4. Add powerups to scene (slowing down time, score booster, extra lives, etc)
# 5. Two-player mode (two sets of inputs controlling two frogs at the same time)
#
#
# Any additional information that the TA needs to know:
# - (write here, if any)
#
#####################################################################
# $t0: drawing address
# $t1: drawing color
# $t2: x
# $t3: y
# $t4: condition loop i
# $t5: condition of i
# $t6: lives
# $t7: seconds Counter
# $t8: others
# $t9: extra color
.data
	displayAddress: .word 0x10008000
	
	# Game State
	isWinning: .word 0
	# Player Infor
	lives: .word 3
	scores: .word 0
	# color
	grass: .word 0x00ff00
	water: .word 0x0000ff
	car_c: .word 0xffffff
	wood_c: .word 0x663300
	road_c: .word 0x7a7a7a
	frog_c: .word 0x000000
	frog2_c: .word 0x006600
	blood: .word 0xff0000
	yellow: .word 0xffff00
	# frog
	frog_x: .word 12
	frog_y: .word 28
	frog2_x: .word 16
	frog2_y: .word 28
	# car1
	car1_x: .word 0
	car1_y: .word 20
	# car2
	car2_x: .word 10
	car2_y: .word 20
	# car3
	car3_x: .word 0
	car3_y: .word 24
	# car4
	car4_x: .word 16
	car4_y: .word 24
	# wood1
	wood1_x: .word 0
	wood1_y: .word 8
	# wood2
	wood2_x: .word 16
	wood2_y: .word 8
	# wood3
	wood3_x: .word 0
	wood3_y: .word 12
	# wood4
	wood4_x: .word 12
	wood4_y: .word 12
	# hp
	hp_item: .word 1
	clock_item: .word 1
	timing: .word 1000
			
.text

main:
	lw $t6, lives
	start: jal update_all
	livesloop:
		beq $t6, $0, Exit
		lw $s7, timing
		addi $s6, $0, 1000
		beq $s6, $s7, normal_time
		jal sep_mov
		j livesloop
	normal_time:
		jal mov_all
		jal wait
		j livesloop
	j Exit
# Help functions
update_all:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	jal grass_draw
	jal road_draw
	jal water_draw
	jal frog_draw
	jal car_draw
	jal wood_draw
	jal draw_hp
	jal item_hp
	jal item_clock
	lw $ra, 0($sp) # pop
	addi $sp, $sp, 4
	jr $ra

# updating object
obj_right_update:
	lw $t0, displayAddress
	addi $t8, $0, 24
	beq $t2, $0, else_0_right_update
	ble $t2, $t8, normal_right_update # if (x >= 31) rm last column and add to head else rm first and add to end
	j else_right_update
	else_0_right_update: addi $t2, $0, 32
	else_right_update: addi $t2, $t2, -1 # find original start
		addi $t4, $t2, -24 # find end
		mul $t2, $t2, 4 # x = x * 4
		mul $t4, $t4, 4 # x_2 = x_2 * 4
		mul $t3, $t3, 128 # y = y * 128
		sub $t2, $t2, $t4
		addi $t5, $0, 128
		sub $t5, $t5, $t2 
		add $t0, $t0, $t3 # setup initial drawing
		add $t0, $t0, $t4 # setup initial drawing
		sw $t1, 0($t0)
		add $t0, $t0, $t2
		sw $t9, 0($t0)
		add $t0, $t0, $t5
		sw $t1, 0($t0)
		add $t0, $t0, $t2
		sw $t9, 0($t0)
		add $t0, $t0, $t5
		sw $t1, 0($t0)
		add $t0, $t0, $t2
		sw $t9, 0($t0)
		add $t0, $t0, $t5
		sw $t1, 0($t0)
		add $t0, $t0, $t2
		sw $t9, 0($t0)
		jr $ra
	normal_right_update: # else begin
		mul $t3, $t3, 128 # y = y * 128
		addi $t2, $t2, -1
		mul $t2, $t2, 4 # x = x * 4
		add $t0, $t0, $t3
		add $t0, $t0, $t2 # setup initial drawing
		sw $t9, 0($t0)
		addi $t0, $t0, 32
		sw $t1, 0($t0)
		addi $t0, $t0, 96
		sw $t9, 0($t0)
		addi $t0, $t0, 32
		sw $t1, 0($t0)
		addi $t0, $t0, 96
		sw $t9, 0($t0)
		addi $t0, $t0, 32
		sw $t1, 0($t0)
		addi $t0, $t0, 96
		sw $t9, 0($t0)
		addi $t0, $t0, 32
		sw $t1, 0($t0)
		jr $ra
obj_left_update:
	lw $t0, displayAddress
	bge $t2, $0, normal_left_update # if (x <= 0) rm last column and add to end els erm last and add to head
		addi $t4, $t2, 8 # the last column
		mul $t3, $t3, 128 # y = y * 128
		add $t0, $t0, $t3 # setup initial drawing
		addi $t2, $t2, 32 # to the end
		mul $t2, $t2, 4 # x = x * 4
		mul $t4, $t4, 4 # x_2 = x_2 * 4
		add $t8, $0, 128 
		sub $t8, $t8, $t2
		add $t5, $0, $t4 # next line space initialize
		add $t5, $t5, $t8 # next line space x_2 remain + x
		sub $t2, $t2, $t4
		add $t0, $t0, $t4 # move to last column 
		sw $t9, 0($t0)
		add $t0, $t0, $t2
		sw $t1, 0($t0)
		add $t0, $t0, $t5
		sw $t9, 0($t0)
		add $t0, $t0, $t2
		sw $t1, 0($t0)
		add $t0, $t0, $t5
		sw $t9, 0($t0)
		add $t0, $t0, $t2
		sw $t1, 0($t0)
		add $t0, $t0, $t5
		sw $t9, 0($t0)
		add $t0, $t0, $t2
		sw $t1, 0($t0)
		jr $ra
	normal_left_update: # else begin
		mul $t3, $t3, 128 # y = y * 128
		mul $t2, $t2, 4 # x = x * 4
		add $t0, $t0, $t3
		add $t0, $t0, $t2 # setup initial drawing
		sw $t1, 0($t0)
		addi $t0, $t0, 32
		sw $t9, 0($t0)
		addi $t0, $t0, 96
		sw $t1, 0($t0)
		addi $t0, $t0, 32
		sw $t9, 0($t0)
		addi $t0, $t0, 96
		sw $t1, 0($t0)
		addi $t0, $t0, 32
		sw $t9, 0($t0)
		addi $t0, $t0, 96
		sw $t1, 0($t0)
		addi $t0, $t0, 32
		sw $t9, 0($t0)
		jr $ra
# updating frog
rm_frog: # clean previous frog
	addi $sp, $sp, -4
	sw $ra, 0($sp)
	rm_1: lw $t2, frog_x
	lw $t3, frog_y
	jal rm_c
	rm_2: lw $t2, frog2_x
	lw $t3, frog2_y
	jal rm_c
	lw $ra, 0($sp)
	addi $sp, $sp, 4
	jr $ra
	rm_c:# select color by different places
	lw $t0, displayAddress
	addi $t4, $0, 20
	addi $t5, $0, 24
	bne $t3, $t4,rm_frog_road
		lw $t1, road_c
		j rm_continue_frog
	rm_frog_road: bne $t3, $t5,rm_frog_wood1
		lw $t1, road_c
		j rm_continue_frog
	rm_frog_wood1: 
		addi $t4, $0, 8
		addi $t5, $0, 12
		bne $t3, $t4, rm_frog_wood2
		lw $t1, wood_c
		j rm_continue_frog
	rm_frog_wood2: bne $t3, $t5, rm_frog_other
		lw $t1, wood_c
		j rm_continue_frog
	rm_frog_other: lw $t1, grass
	rm_continue_frog: 
	addi $sp, $sp, -4
	sw $ra, 0($sp)
	mul $t4, $t3, 128 # y = y * 128 calculate the blocks of current
	mul $t2, $t2, 4 # x = x * 4 calculate position with bytes
	add $t0, $t0, $t4 # start point_y
	add $t0, $t0, $t2 # start point_x
	
	jal draw_frog_head
	lw $ra, 0($sp)
	addi $sp, $sp, 4
	jr $ra
	
check_state: # if be collosion with other object
	# check each object
	addi $sp, $sp, -4
	sw $ra, 0($sp)
	check_state_1: lw $t2, frog_y
	lw $t8, frog_x
	jal check_state_c
	check_state_2: lw $t2, frog2_y
	lw $t8, frog2_x
	jal check_state_c
	lw $ra, 0($sp)
	addi $sp, $sp, 4
	jr $ra
	check_state_c:
	addi $sp, $sp, -4
	sw $ra, 0($sp)
	addi $t4, $0, 24
	bne $t2, $t4, check_road1 # check road2
		lw $t3, car3_x
		jal check_right
		lw $s0, 0($sp)
		addi $sp, $sp, 4
		beq $s0, $0, diediedie
		lw $t3, car4_x
		jal check_right
		lw $s0, 0($sp)
		addi $sp, $sp, 4
		beq $s0, $0, diediedie
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra
	check_road1:
		addi $t4, $0, 20
		bne $t2, $t4, check_items # check road1
		lw $t3, car1_x
		jal check_right
		lw $s0, 0($sp)
		addi $sp, $sp, 4
		beq $s0, $0, diediedie
		lw $t3, car2_x
		jal check_right
		lw $s0, 0($sp)
		addi $sp, $sp, 4
		beq $s0, $0, diediedie
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra
	check_items:
		addi $t4, $0, 16
		bne $t2, $t4, check_wood2 # check road1
		addi $t3, $0, 5
		bgt $t8, $t3, check_item2
		lw $s7, hp_item
		beq $s7, $0, no_checking
		addi $t6, $t6, 1
		jal draw_hp
		jal clean_hp_draw
		sw $0, hp_item
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra
	check_item2: 
		addi $t3, $0, 28
		blt $t8, $t3, no_checking
		lw $s7, clock_item
		beq $s7, $0, no_checking
		lw $s7, timing
		addi $s7, $s7, 2000
		sw $s7, timing
		jal clean_item_clock
		sw $0, clock_item
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra
	check_wood2:
		addi $t4, $0, 12
		bne $t2, $t4, check_wood1
		lw $t3, wood3_x
		jal check_mid_wood
		lw $s0, 0($sp)
		addi $sp, $sp, 4
		# since may appear on one of 2, we need check both
		bne $s0, $0, no_checking
		lw $t3, wood4_x
		jal check_mid_wood
		lw $s0, 0($sp)
		addi $sp, $sp, 4
		beq $s0, $0, diediedie
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra
	check_wood1:
		addi $t4, $0, 8
		bne $t2, $t4, check_win_state
		lw $t3, wood1_x
		jal check_mid_wood
		lw $s0, 0($sp)
		addi $sp, $sp, 4
		bne $s0, $0,  no_checking
		lw $t3, wood2_x
		jal check_mid_wood
		lw $s0, 0($sp)
		addi $sp, $sp, 4
		beq $s0, $0, diediedie
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra
	no_checking:
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra
	check_right:
		# preconditnio:frog_y == carn_y $t2 = frog_x $t3 = carn_x
		addi $s2, $t8, 4 # x1 > y2 or x2 < y1
		addi $s3, $t3, 8
		addi $s5, $0, 24
		bge $t3, $0, obj_right_index_continue # < 0, then + 8 - 31 y2,
			 addi $s3, $t3, 8
			 addi $t3, $t3, 31
			 j obj_right_index_continue
		ble $t3, $s5, obj_right_index_continue # > 24, then + 8 - 31 y2, 
			addi $s3, $t3, -31
		obj_right_index_continue:
			bge $t8, $s3, return_check_right_correct # x1 > y2
			ble $s2, $t3, return_check_right_correct # x2 < y1
			addi $sp, $sp, -4
			sw $0, 0($sp)
			jr $ra
		return_check_right_correct:
			addi $s0, $0, 1
			addi $sp, $sp, -4
			sw $s0, 0($sp)
			jr $ra
	check_mid_wood:
		# precondition: wood_x <= 24 and wood_x >= 0 
		 # x2 <= y2 and x1 >= y1
		addi $s2, $t8, 4
		addi $s3, $t3, 8
		addi $s5, $0, 24
		bge $t8, $t3, check_mid_wood_correct # x1 >= y1
			addi $sp, $sp, -4
			sw $0, 0($sp)
			jr $ra
		check_mid_wood_correct: ble $s2, $s3, return_check_mid_wood_correct # x2 <= y2
			addi $sp, $sp, -4
			sw $0, 0($sp)
			jr $ra
		return_check_mid_wood_correct:
			addi $s0, $0, 1
			addi $sp, $sp, -4
			sw $s0, 0($sp)
			jr $ra
	check_win_state:
		addi $s2, $0, 4 # final y
		bne $s2, $t2, no_checking
		jal clean
		jal win_draw
		jr $ra
		
	# check_edge_wood:
		# frog is either fine in either two parts, but should satisfied 4 conditions
		# Basically right edge use the same method
		# 1. first part larger than 4
		# 	then we can check if frog_x + 4 <= $t3
		# 2. second part larger than 4
		# 	then we can check if frog_x >= $s3
	# sep_left_wood:
		# precondition: left move wood, and wood_x < 8
		# divide the wood into 2 part, use 0, $t3 present first part, and $s3, 31 present second part
		addi $s3, $t3,1
	# sep_right_wood:
		# precondition: left move wood, and wood_x > 23
		# divide the wood into 2 part, use 0, $t3 present first part, and $s3, 31 present second part
		
	diediedie:
		addi $s7, $0, 5
		jal die_draw
		jal die_an
		jal die_draw_b
		jal die_an
		jal die_draw
		jal die_an
		jal die_draw_b
		jal die_an
		jal die_draw
		jal die_an
		jal die_draw_b
		jal die_an
		jal die_draw
		addi $s7, $s7, -1
		jal sleep
		jal reset
		addi $t6, $t6, -1
		j start
# Drawing
grass_draw:
	lw $t0, displayAddress
	lw $t1, grass
bg_draw:
	add $t4, $0, $0 # initilize loop condition 1 to 0
	addi $t5, $0, 1024 # initilize loop goal
	bg_drawr:
		bne $t4, $t5, bg_drawrn  # if t2 != 1024: grass_drawr() position ++; t2++
		jr $ra
	bg_drawrn:
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		addi $t4, $t4, 1
		j bg_drawr

			
road_draw:
	lw $t0, displayAddress
	lw $t1, road_c
	add $t2, $0, $0 # initilize loop condition 1 to 0
	addi $t4, $0, 256 # aim times
	addi $t0, $t0, 2560 # 

	draw_road:
		beq $t2, $t4, end_road_draw  # if t2 != 256: draw_road() position ++; t2++
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		addi $t2, $t2, 1
		j draw_road
	end_road_draw:
		jr $ra
water_draw:
	lw $t0, displayAddress
	lw $t1, water
	add $t2, $0, $0 # initilize loop condition 1 to 0
	addi $t4, $0, 256
	addi $t0, $t0, 1024

	draw_water:
		beq $t2, $t4, end_water_draw  # if t2 != 256: draw_water() position ++; t2++
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		addi $t2, $t2, 1
		j draw_water
	end_water_draw:
		jr $ra
car_draw:
	lw $t1, car_c
	addi $sp, $sp, -4 # push stack
	sw $ra, 0($sp)
	car1_draw:
		lw $t0, displayAddress
		lw $t2, car1_x
		lw $t3, car1_y
		jal draw_obj_initial
	car2_draw:
		lw $t0, displayAddress
		lw $t2, car2_x
		lw $t3, car2_y
		jal draw_obj_initial
	car3_draw:
		lw $t0, displayAddress
		lw $t2, car3_x
		lw $t3, car3_y
		jal draw_obj_initial
	car4_draw:
		lw $t0, displayAddress
		lw $t2, car4_x
		lw $t3, car4_y
		jal draw_obj_initial
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
wood_draw:
	lw $t1, wood_c
	addi $sp, $sp, -4 # push stack
	sw $ra, 0($sp)
	wood1_draw:
		lw $t0, displayAddress
		lw $t2, wood1_x
		lw $t3, wood1_y
		jal draw_obj_initial
	wood2_draw:
		lw $t0, displayAddress
		lw $t2, wood2_x
		lw $t3, wood2_y
		jal draw_obj_initial
	wood3_draw:
		lw $t0, displayAddress
		lw $t2, wood3_x
		lw $t3, wood3_y
		jal draw_obj_initial
	wood4_draw:
		lw $t0, displayAddress
		lw $t2, wood4_x
		lw $t3, wood4_y
		jal draw_obj_initial
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
frog_draw:
	addi $sp, $sp, -4 # push stack
	sw $ra, 0($sp)
	frog_1_draw: lw $t2, frog_x
	lw $t3, frog_y
 	lw $t1, frog_c
	jal frog_draw_c
	frog_2_draw: lw $t2, frog2_x
	lw $t3, frog2_y
	lw $t1, frog2_c
	jal frog_draw_c
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	frog_draw_c:lw $t0, displayAddress
	
	mul $t4, $t3, 128 # y = y * 128 calculate the blocks of current
	mul $t2, $t2, 4 # x = x * 4 calculate position with bytes
	add $t0, $t0, $t4 # start point_y
	add $t0, $t0, $t2 # start point_x	
	draw_frog_head:
		sw $t1, 0($t0)
		addi $t0, $t0, 12
		sw $t1, 0($t0)
	addi $t0, $t0, 116
	draw_frog_body:
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
	addi $t0, $t0, 120
	draw_frog_bottom:
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
	addi $t0, $t0, 120
	draw_frog_foot:
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
	jr $ra
draw_obj_initial:
	mul $t3, $t3, 128 # y = y * 128
	mul $t2, $t2, 4 # x = x * 4
	add $t0, $t0, $t3
	add $t0, $t0, $t2
	addi $t5, $0, 4 # condition of i
	add $t4, $0, $0	
	draw_objl:
		beq $t4, $t5, end_draw_obj  # if t2 != 256: draw_road() position ++; t2++
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t4, $t4, 1
		addi $t0, $t0, 100
		j draw_objl
	end_draw_obj:
		jr $ra

die_draw:
	lw $t1, blood
	j die_draw_c
die_draw_b:lw $t1, frog_c
die_draw_c:
	lw $t0, displayAddress
	mul $s4, $t2, 128 # y = y * 128 calculate the blocks of current
	mul $s7, $t8, 4 # x = x * 4 calculate position with bytes
	add $t0, $t0, $s4 # start point_y
	add $t0, $t0, $s7 # start point_x	
	draw_die_head:
		sw $t1, 0($t0)
		addi $t0, $t0, 12
		sw $t1, 0($t0)
	addi $t0, $t0, 120
	draw_die_body:
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
	addi $t0, $t0, 124
	draw_die_bottom:
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
	addi $t0, $t0, 120
	draw_die_foot:
		sw $t1, 0($t0)
		addi $t0, $t0, 12
		sw $t1, 0($t0)
	jr $ra
draw_hp:
	addi $sp, $sp, -4
	sw $ra, 0($sp)
	addi $s0, $0, 1
	addi $t2, $0, 1
	addi $t3, $0, 0
	addi $s2, $0, 1
	loop_hp: blt $t6, $s0, end_draw_hp
	jal hp_draw
	addi $s0, $s0, 1
	addi $s2, $s2, 6
	add $t2, $s2, $0
	j loop_hp
	end_draw_hp:
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra
item_hp:
	addi $sp, $sp, -4
	sw $ra, 0($sp)
	lw $s7, hp_item
	beq $s7, $0, end_item_hp
	addi $t2, $0, 1
	addi $t3, $0, 16
	jal hp_draw
	end_item_hp:lw $ra, 0($sp)
	addi $sp, $sp, 4
	jr $ra

clean_hp_draw:
	lw $t1, grass
	addi $t2, $0, 1
	addi $t3, $0, 16
	j hp_drawing
hp_draw:
	lw $t1, blood
	hp_drawing: lw $t0, displayAddress
	mul $t2, $t2, 4 # x = x * 4 calculate position with bytes
	mul $t3, $t3, 128
	add $t0, $t0, $t2 # start point_x	
	add $t0, $t0, $t3
	draw_hp_head:	
		sw $t1, 0($t0)
		addi $t0, $t0, 8
		sw $t1, 0($t0)
	addi $t0, $t0, 116
	draw_hp_body:
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
	addi $t0, $t0, 116
	draw_hp_bottom:
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
		addi $t0, $t0, 4
		sw $t1, 0($t0)
	addi $t0, $t0, 124
	draw_hp_foot:
		sw $t1, 0($t0)
	jr $ra
clean_item_clock:
	lw $t1, grass
	lw $t2, grass
	lw $t3, grass
	j item_clock_draw
item_clock:
	lw $s7, clock_item
	beq $s7, $0, end_item_clock
	lw $t1, yellow
	lw $t2, frog_c
	lw $t3, car_c
	item_clock_draw:lw $t0, displayAddress
	addi $s3, $0, 16
	mul $s3, $s3, 128
	add $t0, $t0, $s3
	addi $t0, $t0, 112
	# first line
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 116
	#second line 
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t2, 0($t0)
	addi $t0, $t0, 4
	sw $t3, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 116
	#third line 
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t3, 0($t0)
	addi $t0, $t0, 4
	sw $t2, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 116
	# first line
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	end_item_clock: jr $ra
clean:
	addi $sp, $sp, -4
	sw $ra, 0($sp)
	lw $t0, displayAddress
	lw $t1, frog_c
	jal bg_draw
	lw $ra, 0($sp)
	addi $sp, $sp, 4
	jr $ra

win_draw:
	lw $t0, displayAddress
	lw $t1, grass
	# begin draw
	sw $t1, 0($t0)
	addi $t0, $t0, 32
	sw $t1, 0($t0)
	addi $t0, $t0, 32
	sw $t1, 0($t0)
	addi $t0, $t0, 8
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 8
	sw $t1, 0($t0)
	addi $t0, $t0, 16
	sw $t1, 0($t0)
	addi $t0, $t0, 28
	# second line 
	sw $t1, 0($t0)
	addi $t0, $t0, 24
	sw $t1, 0($t0)
	addi $t0, $t0, 8
	sw $t1, 0($t0)
	addi $t0, $t0, 24
	sw $t1, 0($t0)
	addi $t0, $t0, 16
	sw $t1, 0($t0)
	addi $t0, $t0, 12
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 12
	sw $t1, 0($t0)
	addi $t0, $t0, 32
	# third line
	sw $t1, 0($t0)
	addi $t0, $t0, 16
	sw $t1, 0($t0)
	addi $t0, $t0, 16
	sw $t1, 0($t0)
	addi $t0, $t0, 16
	sw $t1, 0($t0)
	addi $t0, $t0, 20
	sw $t1, 0($t0)
	addi $t0, $t0, 12
	sw $t1, 0($t0)
	addi $t0, $t0, 8
	sw $t1, 0($t0)
	addi $t0, $t0, 8
	sw $t1, 0($t0)
	addi $t0, $t0, 36
	# fourth line
	sw $t1, 0($t0)
	addi $t0, $t0, 8
	sw $t1, 0($t0)
	addi $t0, $t0, 24
	sw $t1, 0($t0)
	addi $t0, $t0, 8
	sw $t1, 0($t0)
	addi $t0, $t0, 24
	sw $t1, 0($t0)
	addi $t0, $t0, 12
	sw $t1, 0($t0)
	addi $t0, $t0, 12
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 40
	# fifth line
	sw $t1, 0($t0)
	addi $t0, $t0, 32
	sw $t1, 0($t0)
	addi $t0, $t0, 24
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 4
	sw $t1, 0($t0)
	addi $t0, $t0, 8
	sw $t1, 0($t0)
	addi $t0, $t0, 16
	sw $t1, 0($t0)
	jr $ra

# Key Action
frogMovement:
	lw $t5, 0xffff0000 # read input
 	beq $t5, 1, Keyboard
 	sw $0, 0xffff0000 # clear input
 	jr $ra
	
Keyboard: 
	addi $sp, $sp, -4 # push stack
	sw $ra, 0($sp)
	lw $t4, 0xffff0004
	beq $t4, 0x61, key_a
 	beq $t4, 0x77, key_w
 	beq $t4, 0x73, key_s
 	beq $t4, 0x64, key_d
 	beq $t4, 0x6A, key_j
 	beq $t4, 0x6B, key_k
 	beq $t4, 0x6C, key_l
 	beq $t4, 0x69, key_i
 	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
 	jr $ra
 	
key_w:
	lw $t3, frog_y
	addi $t3, $t3, -4
	addi $t4, $0, 4
	bge $t3,$t4, w_key
		jr $ra
	w_key:
		sw $t3, frog_y
		jr $ra
key_s:
	lw $t3, frog_y
	addi $t3, $t3, 4
	addi $t4, $0, 28
	ble $t3,$t4, s_key
		jr $ra
	s_key:
		sw $t3, frog_y
		jr $ra
key_a:
	lw $t2, frog_x
	addi $t2, $t2, -4
	bge $t2, $0, a_key
		jr $ra
	a_key:
		sw $t2, frog_x
		jr $ra
key_d:
	lw $t2, frog_x
	addi $t2, $t2, 4
	addi $t4, $0, 28
	ble $t2, $t4, d_key
		jr $ra
	d_key:
		sw $t2, frog_x
		jr $ra
key_i:
	lw $t3, frog2_y
	addi $t3, $t3, -4
	addi $t4, $0, 4
	bge $t3,$t4, i_key
		jr $ra
	i_key:
		sw $t3, frog2_y
		jr $ra
key_k:
	lw $t3, frog2_y
	addi $t3, $t3, 4
	addi $t4, $0, 28
	ble $t3,$t4, k_key
		jr $ra
	k_key:
		sw $t3, frog2_y
		jr $ra
key_j:
	lw $t2, frog2_x
	addi $t2, $t2, -4
	bge $t2, $0, j_key
		jr $ra
	j_key:
		sw $t2, frog2_x
		jr $ra
key_l:
	lw $t2, frog2_x
	addi $t2, $t2, 4
	addi $t4, $0, 28
	ble $t2, $t4, l_key
		jr $ra
	l_key:
		sw $t2, frog2_x
		jr $ra
# Moving
mov_all:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	jal rm_frog
	lw $t1, car_c
	lw $t9, road_c
	jal car1_mov
	jal car2_mov
	jal car3_mov
	jal car4_mov
	jal car3_mov
	jal car4_mov
	lw $t9, water
	lw $t1, wood_c
	jal wood1_mov
	jal wood2_mov
	jal wood1_mov
	jal wood2_mov
	jal wood3_mov
	jal wood4_mov
	jal frogMovement
	jal check_state
	jal frog_draw
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
sep_mov:
	lw $t7, timing
	addi $t8, $0, 1000
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	player_mov_time:ble $t7, $t8, obj_mov_time
		jal rm_frog
		jal frogMovement
		jal check_state
		jal frog_draw
		jal wait
		addi $t7, $t7, -1000
		j player_mov_time
	obj_mov_time:
	jal rm_frog
	lw $t1, car_c
	lw $t9, road_c
	jal car1_mov
	jal car2_mov
	jal car3_mov
	jal car4_mov
	jal car3_mov
	jal car4_mov
	lw $t9, water
	lw $t1, wood_c
	jal wood1_mov
	jal wood2_mov
	jal wood1_mov
	jal wood2_mov
	jal wood3_mov
	jal wood4_mov
	jal frogMovement
	jal check_state
	jal frog_draw
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
car1_mov:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	lw $t2, car1_x
	lw $t3, car1_y
	addi $t4, $0, -8
	addi $t2, $t2, -1
	blt $t2, $t4, else_car1_mov
	sw $t2, car1_x
	jal obj_left_update
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	else_car1_mov:
		addi $t2, $0, 23
		sw $t2, car1_x
		jal obj_left_update
		lw $ra, 0($sp) # stack call back
		addi $sp, $sp, 4
		jr $ra
car2_mov:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	lw $t2, car2_x
	lw $t3, car2_y
	addi $t4, $0, -8
	addi $t2, $t2, -1
	blt $t2, $t4, else_car2_mov
	sw $t2, car2_x
	jal obj_left_update
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	else_car2_mov:
		addi $t2, $0, 23
		sw $t2, car2_x
		jal obj_left_update
		lw $ra, 0($sp) # stack call back
		addi $sp, $sp, 4
		jr $ra
car3_mov:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	lw $t2, car3_x
	lw $t3, car3_y
	addi $t4, $0, 31
	addi $t2, $t2, 1
	bgt $t2, $t4, else_car3_mov
	sw $t2, car3_x
	jal obj_right_update
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	else_car3_mov:
		addi $t2, $0, 0
		sw $t2, car3_x
		jal obj_right_update
		lw $ra, 0($sp) # stack call back
		addi $sp, $sp, 4
		jr $ra
car4_mov:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	lw $t2, car4_x
	lw $t3, car4_y
	addi $t4, $0, 31
	addi $t2, $t2, 1
	bgt $t2, $t4, else_car4_mov
	sw $t2, car4_x
	jal obj_right_update
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	else_car4_mov:
		addi $t2, $0, 0
		sw $t2, car4_x
		jal obj_right_update
		lw $ra, 0($sp) # stack call back
		addi $sp, $sp, 4
		jr $ra
wood1_mov:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	lw $t2, wood1_x
	lw $t3, wood1_y
	addi $t4, $0, -8
	addi $t2, $t2, -1
	blt $t2, $t4, else_wood1_mov
	sw $t2, wood1_x
	jal obj_left_update
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	else_wood1_mov:
		addi $t2, $0, 23
		sw $t2, wood1_x
		jal obj_left_update
		lw $ra, 0($sp) # stack call back
		addi $sp, $sp, 4
		jr $ra
wood2_mov:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	lw $t2, wood2_x
	lw $t3, wood2_y
	addi $t4, $0, -8
	addi $t2, $t2, -1
	blt $t2, $t4, else_wood2_mov
	sw $t2, wood2_x
	jal obj_left_update
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	else_wood2_mov:
		addi $t2, $0, 23
		sw $t2, wood2_x
		jal obj_left_update
		lw $ra, 0($sp) # stack call back
		addi $sp, $sp, 4
		jr $ra
wood3_mov:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	lw $t2, wood3_x
	lw $t3, wood3_y
	addi $t4, $0, 31
	addi $t2, $t2, 1
	bgt $t2, $t4, else_wood3_mov
	sw $t2, wood3_x
	jal obj_right_update
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	else_wood3_mov:
		addi $t2, $0, 0
		sw $t2, wood3_x
		jal obj_right_update
		lw $ra, 0($sp) # stack call back
		addi $sp, $sp, 4
		jr $ra
wood4_mov:
	addi $sp, $sp, -4
	sw $ra, 0($sp) # push last statement
	lw $t2, wood4_x
	lw $t3, wood4_y
	addi $t4, $0, 31
	addi $t2, $t2, 1
	bgt $t2, $t4, else_wood4_mov
	sw $t2, wood4_x
	jal obj_right_update
	lw $ra, 0($sp) # stack call back
	addi $sp, $sp, 4
	jr $ra
	else_wood4_mov:
		addi $t2, $0, 0
		sw $t2, wood4_x
		jal obj_right_update
		lw $ra, 0($sp) # stack call back
		addi $sp, $sp, 4
		jr $ra	
	
# System call
reset:
	sw $0 scores
	sw $0, 0xffff0000 # clear input
	addi $s7, $0, 12
	# frog
	sw $s7, frog_x
	addi $s7, $s7, 4
	sw $s7, frog2_x
	addi $s6, $0, 28
	sw $s6, frog_y
	sw $s6, frog2_y
	# car1
	sw $0, car1_x
	addi $s6, $s6, -8
	sw $s6, car1_y
	# car2
	addi $s5, $0, 10
	sw $s5, car2_x
	sw $s6, car2_y
	# car3
	sw $0, car3_x
	addi $s6, $s6, 4
	sw $s6, car3_y
	# car4
	addi $s5, $s5, 6
	sw $s5, car4_x
	sw $s6, car4_y
	# wood1
	sw $0, wood1_x
	addi $s6, $s6, -16
	sw $s6, wood1_y
	# wood2
	sw $s5, wood2_x
	sw $s6, wood2_y
	# wood3
	addi $s7, $0, 12
	sw $0, wood3_x
	sw $s7, wood3_y
	# wood4
	sw $s7, wood4_x
	sw $s7, wood4_y
	addi $s7, $0, 1000
	sw $s7, timing
	#addi $s7, $0, 1
	#sw $s7, hp_item
	#sw $s7, clock_item
	jr $ra
die_an:
	li $v0, 32 
	li $a0, 200
	syscall
	jr $ra
wait:
	# wait 1 sec
	li $v0, 32 
	li $a0, 1000
	syscall
	jr $ra
sleep:
	li $v0, 32
	li $a0, 5000
	syscall
	jr $ra
	
Exit:
	li $v0, 10 # terminate the program gracefully
	syscall
