// Code generated by Téodor Todorov (Creator of Digibear).
// DO NOT EDIT.
// Copyright 2021 Digibear.
// All rights reserved.

import { DbIconProps } from '@digibearapp/digibear-common-types';
import { Story } from '@storybook/react';
import { DbIcon } from '..';

export default {
    title: 'Example/DbIcon',
    component: DbIcon,
    argTypes: {
        iconName: {
            options: ["activity",
				"airplay",
				"alarmCheck",
				"alarmCross",
				"alarm",
				"alarmMinus",
				"alarmOff",
				"alarmPlus",
				"alarmSnooze",
				"alignBottom",
				"alignCenterHorizontal",
				"alignCenterVertical",
				"alignLeft",
				"alignRight",
				"alignTop",
				"anchor",
				"aperture",
				"apple",
				"arrowBendDownLeftBadge",
				"arrowBendDownLeftCircle",
				"arrowBendDownLeft",
				"arrowBendDownLeftHexagon",
				"arrowBendDownLeftRRect",
				"arrowBendDownLeftSmall",
				"arrowBendDownLeftTriangle",
				"arrowBendDownRightBadge",
				"arrowBendDownRightCircle",
				"arrowBendDownRight",
				"arrowBendDownRightHexagon",
				"arrowBendDownRightRRect",
				"arrowBendDownRightSmall",
				"arrowBendDownRightTriangle",
				"arrowBendLeftDownBadge",
				"arrowBendLeftDownCircle",
				"arrowBendLeftDown",
				"arrowBendLeftDownHexagon",
				"arrowBendLeftDownRRect",
				"arrowBendLeftDownSmall",
				"arrowBendLeftDownTriangle",
				"arrowBendLeftUpBadge",
				"arrowBendLeftUpCircle",
				"arrowBendLeftUp",
				"arrowBendLeftUpHexagon",
				"arrowBendLeftUpRRect",
				"arrowBendLeftUpSmall",
				"arrowBendLeftUpTriangle",
				"arrowBendRightDownBadge",
				"arrowBendRightDownCircle",
				"arrowBendRightDown",
				"arrowBendRightDownHexagon",
				"arrowBendRightDownRRect",
				"arrowBendRightDownSmall",
				"arrowBendRightDownTriangle",
				"arrowBendRightUpBadge",
				"arrowBendRightUpCircle",
				"arrowBendRightUp",
				"arrowBendRightUpHexagon",
				"arrowBendRightUpRRect",
				"arrowBendRightUpSmall",
				"arrowBendRightUpTriangle",
				"arrowBendUpLeftBadge",
				"arrowBendUpLeftCircle",
				"arrowBendUpLeftDoubleBadge",
				"arrowBendUpLeftDoubleCircle",
				"arrowBendUpLeftDouble",
				"arrowBendUpLeftDoubleHexagon",
				"arrowBendUpLeftDoubleRRect",
				"arrowBendUpLeftDoubleSmall",
				"arrowBendUpLeftDoubleTriangle",
				"arrowBendUpLeft",
				"arrowBendUpLeftHexagon",
				"arrowBendUpLeftRRect",
				"arrowBendUpLeftSmall",
				"arrowBendUpLeftTriangle",
				"arrowBendUpRightBadge",
				"arrowBendUpRightCircle",
				"arrowBendUpRightDoubleBadge",
				"arrowBendUpRightDoubleCircle",
				"arrowBendUpRightDouble",
				"arrowBendUpRightDoubleHexagon",
				"arrowBendUpRightDoubleRRect",
				"arrowBendUpRightDoubleSmall",
				"arrowBendUpRightDoubleTriangle",
				"arrowBendUpRight",
				"arrowBendUpRightHexagon",
				"arrowBendUpRightRRect",
				"arrowBendUpRightSmall",
				"arrowBendUpRightTriangle",
				"arrowCircleClockwiseBadge",
				"arrowCircleClockwiseCircle",
				"arrowCircleClockwise",
				"arrowCircleClockwiseHexagon",
				"arrowCircleClockwiseRRect",
				"arrowCircleClockwiseSmall",
				"arrowCircleClockwiseTriangle",
				"arrowCircleCounterClockwiseBadge",
				"arrowCircleCounterClockwiseCircle",
				"arrowCircleCounterClockwise",
				"arrowCircleCounterClockwiseHexagon",
				"arrowCircleCounterClockwiseRRect",
				"arrowCircleCounterClockwiseSmall",
				"arrowCircleCounterClockwiseTriangle",
				"arrowCornerInBottomLeftBadge",
				"arrowCornerInBottomLeftCircle",
				"arrowCornerInBottomLeft",
				"arrowCornerInBottomLeftHexagon",
				"arrowCornerInBottomLeftRRect",
				"arrowCornerInBottomLeftSmall",
				"arrowCornerInBottomLeftTriangle",
				"arrowCornerInBottomRightBadge",
				"arrowCornerInBottomRightCircle",
				"arrowCornerInBottomRight",
				"arrowCornerInBottomRightHexagon",
				"arrowCornerInBottomRightRRect",
				"arrowCornerInBottomRightSmall",
				"arrowCornerInBottomRightTriangle",
				"arrowCornerInTopLeftBadge",
				"arrowCornerInTopLeftCircle",
				"arrowCornerInTopLeft",
				"arrowCornerInTopLeftHexagon",
				"arrowCornerInTopLeftRRect",
				"arrowCornerInTopLeftSmall",
				"arrowCornerInTopLeftTriangle",
				"arrowCornerInTopRightBadge",
				"arrowCornerInTopRightCircle",
				"arrowCornerInTopRight",
				"arrowCornerInTopRightHexagon",
				"arrowCornerInTopRightRRect",
				"arrowCornerInTopRightSmall",
				"arrowCornerInTopRightTriangle",
				"arrowCornerOutBottomLeftBadge",
				"arrowCornerOutBottomLeftCircle",
				"arrowCornerOutBottomLeft",
				"arrowCornerOutBottomLeftHexagon",
				"arrowCornerOutBottomLeftRRect",
				"arrowCornerOutBottomLeftSmall",
				"arrowCornerOutBottomLeftTriangle",
				"arrowCornerOutBottomRightBadge",
				"arrowCornerOutBottomRightCircle",
				"arrowCornerOutBottomRight",
				"arrowCornerOutBottomRightHexagon",
				"arrowCornerOutBottomRightRRect",
				"arrowCornerOutBottomRightSmall",
				"arrowCornerOutBottomRightTriangle",
				"arrowCornerOutTopLeftBadge",
				"arrowCornerOutTopLeftCircle",
				"arrowCornerOutTopLeft",
				"arrowCornerOutTopLeftHexagon",
				"arrowCornerOutTopLeftRRect",
				"arrowCornerOutTopLeftSmall",
				"arrowCornerOutTopLeftTriangle",
				"arrowCornerOutTopRightBadge",
				"arrowCornerOutTopRightCircle",
				"arrowCornerOutTopRight",
				"arrowCornerOutTopRightHexagon",
				"arrowCornerOutTopRightRRect",
				"arrowCornerOutTopRightSmall",
				"arrowCornerOutTopRightTriangle",
				"arrowDownBadge",
				"arrowDownCircle",
				"arrowDown",
				"arrowDownHexagon",
				"arrowDownLeftBadge",
				"arrowDownLeftCircle",
				"arrowDownLeft",
				"arrowDownLeftHexagon",
				"arrowDownLeftRRect",
				"arrowDownLeftSmall",
				"arrowDownLeftTriangle",
				"arrowDownRRect",
				"arrowDownRightBadge",
				"arrowDownRightCircle",
				"arrowDownRight",
				"arrowDownRightHexagon",
				"arrowDownRightRRect",
				"arrowDownRightSmall",
				"arrowDownRightTriangle",
				"arrowDownSmall",
				"arrowDownTriangle",
				"arrowFatDownBadge",
				"arrowFatDownCircle",
				"arrowFatDown",
				"arrowFatDownHexagon",
				"arrowFatDownLeftBadge",
				"arrowFatDownLeftCircle",
				"arrowFatDownLeft",
				"arrowFatDownLeftHexagon",
				"arrowFatDownLeftRRect",
				"arrowFatDownLeftSmall",
				"arrowFatDownLeftTriangle",
				"arrowFatDownRRect",
				"arrowFatDownRightBadge",
				"arrowFatDownRightCircle",
				"arrowFatDownRight",
				"arrowFatDownRightHexagon",
				"arrowFatDownRightRRect",
				"arrowFatDownRightSmall",
				"arrowFatDownRightTriangle",
				"arrowFatDownSmall",
				"arrowFatDownTriangle",
				"arrowFatLeftBadge",
				"arrowFatLeftCircle",
				"arrowFatLeft",
				"arrowFatLeftHexagon",
				"arrowFatLeftLineSmall",
				"arrowFatLeftRRect",
				"arrowFatLeftSmall",
				"arrowFatLeftTriangle",
				"arrowFatLineDownBadge",
				"arrowFatLineDownCircle",
				"arrowFatLineDown",
				"arrowFatLineDownHexagon",
				"arrowFatLineDownLeftBadge",
				"arrowFatLineDownLeftCircle",
				"arrowFatLineDownLeft",
				"arrowFatLineDownLeftHexagon",
				"arrowFatLineDownLeftRRect",
				"arrowFatLineDownLeftSmall",
				"arrowFatLineDownLeftTriangle",
				"arrowFatLineDownRRect",
				"arrowFatLineDownRightBadge",
				"arrowFatLineDownRightCircle",
				"arrowFatLineDownRight",
				"arrowFatLineDownRightHexagon",
				"arrowFatLineDownRightRRect",
				"arrowFatLineDownRightSmall",
				"arrowFatLineDownRightTriangle",
				"arrowFatLineDownSmall",
				"arrowFatLineDownTriangle",
				"arrowFatLineLeftBadge",
				"arrowFatLineLeftCircle",
				"arrowFatLineLeft",
				"arrowFatLineLeftHexagon",
				"arrowFatLineLeftRRect",
				"arrowFatLineLeftTriangle",
				"arrowFatLineRightBadge",
				"arrowFatLineRightCircle",
				"arrowFatLineRight",
				"arrowFatLineRightHexagon",
				"arrowFatLineRightRRect",
				"arrowFatLineRightSmall",
				"arrowFatLineRightTriangle",
				"arrowFatLineUpBadge",
				"arrowFatLineUpCircle",
				"arrowFatLineUp",
				"arrowFatLineUpHexagon",
				"arrowFatLineUpLeftBadge",
				"arrowFatLineUpLeftCircle",
				"arrowFatLineUpLeft",
				"arrowFatLineUpLeftHexagon",
				"arrowFatLineUpLeftRRect",
				"arrowFatLineUpLeftSmall",
				"arrowFatLineUpLeftTriangle",
				"arrowFatLineUpRRect",
				"arrowFatLineUpRightBadge",
				"arrowFatLineUpRightCircle",
				"arrowFatLineUpRight",
				"arrowFatLineUpRightHexagon",
				"arrowFatLineUpRightRRect",
				"arrowFatLineUpRightSmall",
				"arrowFatLineUpRightTriangle",
				"arrowFatLineUpSmall",
				"arrowFatLineUpTriangle",
				"arrowFatRightBadge",
				"arrowFatRightCircle",
				"arrowFatRight",
				"arrowFatRightHexagon",
				"arrowFatRightRRect",
				"arrowFatRightSmall",
				"arrowFatRightTriangle",
				"arrowFatUpBadge",
				"arrowFatUpCircle",
				"arrowFatUp",
				"arrowFatUpHexagon",
				"arrowFatUpLeftBadge",
				"arrowFatUpLeftCircle",
				"arrowFatUpLeft",
				"arrowFatUpLeftHexagon",
				"arrowFatUpLeftRRect",
				"arrowFatUpLeftSmall",
				"arrowFatUpLeftTriangle",
				"arrowFatUpRRect",
				"arrowFatUpRightBadge",
				"arrowFatUpRightCircle",
				"arrowFatUpRight",
				"arrowFatUpRightHexagon",
				"arrowFatUpRightRRect",
				"arrowFatUpRightSmall",
				"arrowFatUpRightTriangle",
				"arrowFatUpSmall",
				"arrowFatUpTriangle",
				"arrowLeftBadge",
				"arrowLeftCircle",
				"arrowLeft",
				"arrowLeftHexagon",
				"arrowLeftRRect",
				"arrowLeftSmall",
				"arrowLeftTriangle",
				"arrowLineDownBadge",
				"arrowLineDownCircle",
				"arrowLineDown",
				"arrowLineDownHexagon",
				"arrowLineDownLeftBadge",
				"arrowLineDownLeftCircle",
				"arrowLineDownLeft",
				"arrowLineDownLeftHexagon",
				"arrowLineDownLeftRRect",
				"arrowLineDownLeftSmall",
				"arrowLineDownLeftTriangle",
				"arrowLineDownRRect",
				"arrowLineDownRightBadge",
				"arrowLineDownRightCircle",
				"arrowLineDownRight",
				"arrowLineDownRightHexagon",
				"arrowLineDownRightRRect",
				"arrowLineDownRightSmall",
				"arrowLineDownRightTriangle",
				"arrowLineDownSmall",
				"arrowLineDownTriangle",
				"arrowLineLeftBadge",
				"arrowLineLeftCircle",
				"arrowLineLeft",
				"arrowLineLeftHexagon",
				"arrowLineLeftRRect",
				"arrowLineLeftSmall",
				"arrowLineLeftTriangle",
				"arrowLineRightBadge",
				"arrowLineRightCircle",
				"arrowLineRight",
				"arrowLineRightHexagon",
				"arrowLineRightRRect",
				"arrowLineRightSmall",
				"arrowLineRightTriangle",
				"arrowLineUpBadge",
				"arrowLineUpCircle",
				"arrowLineUp",
				"arrowLineUpHexagon",
				"arrowLineUpLeftBadge",
				"arrowLineUpLeftCircle",
				"arrowLineUpLeft",
				"arrowLineUpLeftHexagon",
				"arrowLineUpLeftRRect",
				"arrowLineUpLeftSmall",
				"arrowLineUpLeftTriangle",
				"arrowLineUpRRect",
				"arrowLineUpRightBadge",
				"arrowLineUpRightCircle",
				"arrowLineUpRight",
				"arrowLineUpRightHexagon",
				"arrowLineUpRightRRect",
				"arrowLineUpRightSmall",
				"arrowLineUpRightTriangle",
				"arrowLineUpSmall",
				"arrowLineUpTriangle",
				"arrowRectangleInDownBadge",
				"arrowRectangleInDownCircle",
				"arrowRectangleInDown",
				"arrowRectangleInDownHexagon",
				"arrowRectangleInDownRRect",
				"arrowRectangleInDownSmall",
				"arrowRectangleInDownTriangle",
				"arrowRectangleInLeftBadge",
				"arrowRectangleInLeftCircle",
				"arrowRectangleInLeft",
				"arrowRectangleInLeftHexagon",
				"arrowRectangleInLeftRRect",
				"arrowRectangleInLeftSmall",
				"arrowRectangleInLeftTriangle",
				"arrowRectangleInRightBadge",
				"arrowRectangleInRightCircle",
				"arrowRectangleInRight",
				"arrowRectangleInRightHexagon",
				"arrowRectangleInRightRRect",
				"arrowRectangleInRightSmall",
				"arrowRectangleInRightTriangle",
				"arrowRectangleInUpBadge",
				"arrowRectangleInUpCircle",
				"arrowRectangleInUp",
				"arrowRectangleInUpHexagon",
				"arrowRectangleInUpRRect",
				"arrowRectangleInUpSmall",
				"arrowRectangleInUpTriangle",
				"arrowRectangleOutDownBadge",
				"arrowRectangleOutDownCircle",
				"arrowRectangleOutDown",
				"arrowRectangleOutDownHexagon",
				"arrowRectangleOutDownRRect",
				"arrowRectangleOutDownSmall",
				"arrowRectangleOutDownTriangle",
				"arrowRectangleOutLeftBadge",
				"arrowRectangleOutLeftCircle",
				"arrowRectangleOutLeft",
				"arrowRectangleOutLeftHexagon",
				"arrowRectangleOutLeftRRect",
				"arrowRectangleOutLeftSmall",
				"arrowRectangleOutLeftTriangle",
				"arrowRectangleOutRightBadge",
				"arrowRectangleOutRightCircle",
				"arrowRectangleOutRight",
				"arrowRectangleOutRightHexagon",
				"arrowRectangleOutRightRRect",
				"arrowRectangleOutRightSmall",
				"arrowRectangleOutRightTriangle",
				"arrowRectangleOutUpBadge",
				"arrowRectangleOutUpCircle",
				"arrowRectangleOutUp",
				"arrowRectangleOutUpHexagon",
				"arrowRectangleOutUpRRect",
				"arrowRectangleOutUpSmall",
				"arrowRectangleOutUpTriangle",
				"arrowReturnDownLeftBadge",
				"arrowReturnDownLeftCircle",
				"arrowReturnDownLeft",
				"arrowReturnDownLeftHexagon",
				"arrowReturnDownLeftRRect",
				"arrowReturnDownLeftSmall",
				"arrowReturnDownLeftTriangle",
				"arrowReturnDownRightBadge",
				"arrowReturnDownRightCircle",
				"arrowReturnDownRight",
				"arrowReturnDownRightHexagon",
				"arrowReturnDownRightRRect",
				"arrowReturnDownRightSmall",
				"arrowReturnDownRightTriangle",
				"arrowReturnLeftDownBadge",
				"arrowReturnLeftDownCircle",
				"arrowReturnLeftDown",
				"arrowReturnLeftDownHexagon",
				"arrowReturnLeftDownRRect",
				"arrowReturnLeftDownSmall",
				"arrowReturnLeftDownTriangle",
				"arrowReturnLeftUpBadge",
				"arrowReturnLeftUpCircle",
				"arrowReturnLeftUp",
				"arrowReturnLeftUpHexagon",
				"arrowReturnLeftUpRRect",
				"arrowReturnLeftUpSmall",
				"arrowReturnLeftUpTriangle",
				"arrowReturnRightDownBadge",
				"arrowReturnRightDownCircle",
				"arrowReturnRightDown",
				"arrowReturnRightDownHexagon",
				"arrowReturnRightDownRRect",
				"arrowReturnRightDownSmall",
				"arrowReturnRightDownTriangle",
				"arrowReturnRightUpBadge",
				"arrowReturnRightUpCircle",
				"arrowReturnRightUp",
				"arrowReturnRightUpHexagon",
				"arrowReturnRightUpRRect",
				"arrowReturnRightUpSmall",
				"arrowReturnRightUpTriangle",
				"arrowReturnUpLeftBadge",
				"arrowReturnUpLeftCircle",
				"arrowReturnUpLeft",
				"arrowReturnUpLeftHexagon",
				"arrowReturnUpLeftRRect",
				"arrowReturnUpLeftSmall",
				"arrowReturnUpLeftTriangle",
				"arrowReturnUpRightBadge",
				"arrowReturnUpRightCircle",
				"arrowReturnUpRight",
				"arrowReturnUpRightHexagon",
				"arrowReturnUpRightRRect",
				"arrowReturnUpRightSmall",
				"arrowReturnUpRightTriangle",
				"arrowRightBadge",
				"arrowRightCircle",
				"arrowRight",
				"arrowRightHexagon",
				"arrowRightRRect",
				"arrowRightSmall",
				"arrowRightTriangle",
				"arrowTrendDownBadge",
				"arrowTrendDownCircle",
				"arrowTrendDown",
				"arrowTrendDownHexagon",
				"arrowTrendDownRRect",
				"arrowTrendDownSmall",
				"arrowTrendDownTriangle",
				"arrowTrendUpBadge",
				"arrowTrendUpCircle",
				"arrowTrendUp",
				"arrowTrendUpHexagon",
				"arrowTrendUpRRect",
				"arrowTrendUpSmall",
				"arrowTrendUpTriangle",
				"arrowUpBadge",
				"arrowUpCircle",
				"arrowUp",
				"arrowUpHexagon",
				"arrowUpLeftBadge",
				"arrowUpLeftCircle",
				"arrowUpLeft",
				"arrowUpLeftHexagon",
				"arrowUpLeftRRect",
				"arrowUpLeftSmall",
				"arrowUpLeftTriangle",
				"arrowUpRRect",
				"arrowUpRightBadge",
				"arrowUpRightCircle",
				"arrowUpRight",
				"arrowUpRightHexagon",
				"arrowUpRightRRect",
				"arrowUpRightSmall",
				"arrowUpRightTriangle",
				"arrowUpSmall",
				"arrowUpTriangle",
				"arrowsCircleClockwiseBadge",
				"arrowsCircleClockwiseCircle",
				"arrowsCircleClockwise",
				"arrowsCircleClockwiseHexagon",
				"arrowsCircleClockwiseRRect",
				"arrowsCircleClockwiseSmall",
				"arrowsCircleClockwiseTriangle",
				"arrowsCircleCounterClockwiseBadge",
				"arrowsCircleCounterClockwiseCircle",
				"arrowsCircleCounterClockwise",
				"arrowsCircleCounterClockwiseHexagon",
				"arrowsCircleCounterClockwiseRRect",
				"arrowsCircleCounterClockwiseSmall",
				"arrowsCircleCounterClockwiseTriangle",
				"arrowsCornerBottomLeftBadge",
				"arrowsCornerBottomLeftCircle",
				"arrowsCornerBottomLeft",
				"arrowsCornerBottomLeftHexagon",
				"arrowsCornerBottomLeftRRect",
				"arrowsCornerBottomLeftSmall",
				"arrowsCornerBottomLeftTriangle",
				"arrowsCornerBottomRightBadge",
				"arrowsCornerBottomRightCircle",
				"arrowsCornerBottomRight",
				"arrowsCornerBottomRightHexagon",
				"arrowsCornerBottomRightRRect",
				"arrowsCornerBottomRightSmall",
				"arrowsCornerBottomRightTriangle",
				"arrowsCornerLeftBadge",
				"arrowsCornerLeftCircle",
				"arrowsCornerLeft",
				"arrowsCornerLeftHexagon",
				"arrowsCornerLeftRRect",
				"arrowsCornerLeftSmall",
				"arrowsCornerLeftSplitBadge",
				"arrowsCornerLeftSplitCircle",
				"arrowsCornerLeftSplit",
				"arrowsCornerLeftSplitHexagon",
				"arrowsCornerLeftSplitRRect",
				"arrowsCornerLeftSplitSmall",
				"arrowsCornerLeftSplitTriangle",
				"arrowsCornerLeftTriangle",
				"arrowsCornerRightBadge",
				"arrowsCornerRightCircle",
				"arrowsCornerRight",
				"arrowsCornerRightHexagon",
				"arrowsCornerRightRRect",
				"arrowsCornerRightSmall",
				"arrowsCornerRightSplitBadge",
				"arrowsCornerRightSplitCircle",
				"arrowsCornerRightSplit",
				"arrowsCornerRightSplitHexagon",
				"arrowsCornerRightSplitRRect",
				"arrowsCornerRightSplitSmall",
				"arrowsCornerRightSplitTriangle",
				"arrowsCornerRightTriangle",
				"arrowsCornerTopLeftBadge",
				"arrowsCornerTopLeftCircle",
				"arrowsCornerTopLeft",
				"arrowsCornerTopLeftHexagon",
				"arrowsCornerTopLeftRRect",
				"arrowsCornerTopLeftSmall",
				"arrowsCornerTopLeftTriangle",
				"arrowsCornerTopRightBadge",
				"arrowsCornerTopRightCircle",
				"arrowsCornerTopRight",
				"arrowsCornerTopRightHexagon",
				"arrowsCornerTopRightRRect",
				"arrowsCornerTopRightSmall",
				"arrowsCornerTopRightTriangle",
				"arrowsInHorizontalBadge",
				"arrowsInHorizontalCircle",
				"arrowsInHorizontalHexagon",
				"arrowsInHorizontalRRect",
				"arrowsInHorizontalTriangle",
				"arrowsInLineHorizontal",
				"arrowsInLineHorizontalSmall",
				"arrowsInLineVertical",
				"arrowsInLineVerticalSmall",
				"arrowsInVerticalBadge",
				"arrowsInVerticalCircle",
				"arrowsInVerticalHexagon",
				"arrowsInVerticalRRect",
				"arrowsInVerticalTriangle",
				"arrowsLeftRightBadge",
				"arrowsLeftRightCircle",
				"arrowsLeftRight",
				"arrowsLeftRightHexagon",
				"arrowsLeftRightSmall",
				"arrowsLeftRightTriangle",
				"arrowsOutBadge",
				"arrowsOutCardinalBadge",
				"arrowsOutCardinalCircle",
				"arrowsOutCardinal",
				"arrowsOutCardinalHexagon",
				"arrowsOutCardinalRRect",
				"arrowsOutCardinalSmall",
				"arrowsOutCardinalSplitBadge",
				"arrowsOutCardinalSplitCircle",
				"arrowsOutCardinalSplit",
				"arrowsOutCardinalSplitHexagon",
				"arrowsOutCardinalSplitRRect",
				"arrowsOutCardinalSplitSmall",
				"arrowsOutCardinalSplitTriangle",
				"arrowsOutCardinalTriangle",
				"arrowsOutCircle",
				"arrowsOut",
				"arrowsOutHexagon",
				"arrowsOutRRect",
				"arrowsOutSmall",
				"arrowsOutSplitBadge",
				"arrowsOutSplitCircle",
				"arrowsOutSplit",
				"arrowsOutSplitHexagon",
				"arrowsOutSplitRRect",
				"arrowsOutSplitSmall",
				"arrowsOutSplitTriangle",
				"arrowsOutTriangle",
				"arrowsleftRightRRect",
				"artboard",
				"atBadge",
				"atCircle",
				"at",
				"atHexagon",
				"atRRect",
				"atSmall",
				"atTriangle",
				"atom",
				"babyCarriage",
				"bagShoppingAlt1",
				"bagShopping",
				"ballet",
				"ban",
				"banana",
				"batteryCharging",
				"batteryEmpty",
				"batteryExclamation",
				"batteryFull",
				"batteryLow",
				"batteryMid",
				"batteryOff",
				"bedFor2",
				"bellCheck",
				"bell",
				"bellMinus",
				"bellOff",
				"bellPlus",
				"bellRing",
				"bike",
				"bikeElectric",
				"bluetooth",
				"bluetoothOff",
				"bolt",
				"book",
				"bookOpen",
				"bookmarkCheck",
				"bookmark",
				"bookmarkMinus",
				"bookmarkOff",
				"bookmarkPlus",
				"bookmarks",
				"bordersAll",
				"bordersBottom",
				"bordersCenterHorizontal",
				"bordersCenterVertical",
				"bordersInner",
				"bordersLeft",
				"bordersNone",
				"bordersOuter",
				"bordersRight",
				"bordersTop",
				"boxArchive",
				"box",
				"boxSimple",
				"boxTaped",
				"bracketsBadge",
				"bracketsCircle",
				"brackets",
				"bracketsHexagon",
				"bracketsRRect",
				"bracketsRoundBadge",
				"bracketsRoundCircle",
				"bracketsRound",
				"bracketsRoundHexagon",
				"bracketsRoundRRect",
				"bracketsRoundSmall",
				"bracketsRoundTriangle",
				"bracketsSmall",
				"bracketsSquareBadge",
				"bracketsSquareCircle",
				"bracketsSquare",
				"bracketsSquareHexagon",
				"bracketsSquareRRect",
				"bracketsSquareSmall",
				"bracketsSquareTriangle",
				"bracketsTriangle",
				"briefcaseAlt1",
				"briefcase",
				"broadcast",
				"brush",
				"bug",
				"cactus",
				"calendarArrowRight",
				"calendarCheck",
				"calendarCross",
				"calendarDay",
				"calendar",
				"calendarEvent",
				"calendarLines",
				"calendarMinus",
				"calendarPlus",
				"calendarRange",
				"camera",
				"cameraOff",
				"car",
				"carSide",
				"cardReader",
				"carrot",
				"cast",
				"chartRect",
				"chatCheck",
				"chatCross",
				"chatDots",
				"chat",
				"chatExclamation",
				"chatInfo",
				"chatMinus",
				"chatOff",
				"chatPlus",
				"chatQuestion",
				"chatRectCheck",
				"chatRectCross",
				"chatRectDots",
				"chatRect",
				"chatRectExclamation",
				"chatRectInfo",
				"chatRectMinus",
				"chatRectOff",
				"chatRectPlus",
				"chatRectQuestion",
				"chatRectText",
				"chatText",
				"chats",
				"chatsRect",
				"checkBadge",
				"checkCircle",
				"check",
				"checkHexagon",
				"checkRRect",
				"checkSmall",
				"checkTriangle",
				"cherries",
				"chevronDoubleDownBadge",
				"chevronDoubleDownCircle",
				"chevronDoubleDown",
				"chevronDoubleDownHexagon",
				"chevronDoubleDownRRect",
				"chevronDoubleDownSmall",
				"chevronDoubleDownTriangle",
				"chevronDoubleLeftBadge",
				"chevronDoubleLeftCircle",
				"chevronDoubleLeft",
				"chevronDoubleLeftHexagon",
				"chevronDoubleLeftRRect",
				"chevronDoubleLeftSmall",
				"chevronDoubleLeftTriangle",
				"chevronDoubleRightBadge",
				"chevronDoubleRightCircle",
				"chevronDoubleRight",
				"chevronDoubleRightHexagon",
				"chevronDoubleRightRRect",
				"chevronDoubleRightSmall",
				"chevronDoubleRightTriangle",
				"chevronDoubleUpBadge",
				"chevronDoubleUpCircle",
				"chevronDoubleUp",
				"chevronDoubleUpHexagon",
				"chevronDoubleUpRRect",
				"chevronDoubleUpSmall",
				"chevronDoubleUpTriangle",
				"chevronDownBadge",
				"chevronDownCircle",
				"chevronDown",
				"chevronDownHexagon",
				"chevronDownRRect",
				"chevronDownSmall",
				"chevronDownTriangle",
				"chevronLeftBadge",
				"chevronLeftCircle",
				"chevronLeft",
				"chevronLeftHexagon",
				"chevronLeftRRect",
				"chevronLeftSmall",
				"chevronLeftTriangle",
				"chevronRightBadge",
				"chevronRightCircle",
				"chevronRight",
				"chevronRightHexagon",
				"chevronRightRRect",
				"chevronRightSmall",
				"chevronRightTriangle",
				"chevronUpBadge",
				"chevronUpCircle",
				"chevronUp",
				"chevronUpHexagon",
				"chevronUpRRect",
				"chevronUpSmall",
				"chevronUpTriangle",
				"chevronsBadge",
				"chevronsCircle",
				"chevrons",
				"chevronsHexagon",
				"chevronsRRect",
				"chevronsSmall",
				"chevronsTriangle",
				"circleNotch",
				"clapperboard",
				"clipboardCheck",
				"clipboardCross",
				"clipboard",
				"clipboardMinus",
				"clipboardOff",
				"clipboardPlus",
				"clipboardText",
				"clock",
				"closedCaptioning",
				"cloudArrowDown",
				"cloudArrowUp",
				"cloud",
				"cloudFog",
				"cloudLightning",
				"cloudOff",
				"cloudRain",
				"cloudRainLight",
				"cloudRainLightLightning",
				"cloudSnow",
				"cloudSnowLight",
				"cloudSnowLightning",
				"coconut",
				"coffee",
				"cog6",
				"cog8",
				"column",
				"commandBadge",
				"commandCircle",
				"command",
				"commandHexagon",
				"commandRRect",
				"commandSmall",
				"commandTriangle",
				"compass",
				"copyright",
				"cornersIn",
				"cornersOut",
				"cpu",
				"creditCardArrowIn",
				"creditCardArrowOut",
				"creditCard",
				"creditCardMinus",
				"creditCardOff",
				"creditCardPlus",
				"creditCardScan",
				"crop",
				"crossBadge",
				"crossCircle",
				"cross",
				"crossHexagon",
				"crossRRect",
				"crossSmall",
				"crossTriangle",
				"cube",
				"curve",
				"dashboard",
				"database",
				"dayCloudy",
				"dayFog",
				"dayLightning",
				"dayRain",
				"dayRainLight",
				"dayRainLightLightning",
				"daySnow",
				"daySnowLight",
				"daySnowLightLightning",
				"definitionHigh",
				"devices",
				"dial",
				"distributeSpacingHorizontal",
				"distributeSpacingVertical",
				"dollarSignBadge",
				"dollarSignCircle",
				"dollarSign",
				"dollarSignHexagon",
				"dollarSignRRect",
				"dollarSignSmall",
				"dollarSignTriangle",
				"dots3HorizontalBadge",
				"dots3HorizontalCircle",
				"dots3Horizontal",
				"dots3HorizontalHexagon",
				"dots3HorizontalRRect",
				"dots3HorizontalSmall",
				"dots3HorizontalTriangle",
				"dots3VerticalBadge",
				"dots3VerticalCircle",
				"dots3Vertical",
				"dots3VerticalHexagon",
				"dots3VerticalRRect",
				"dots3VerticalSmall",
				"dots3VerticalTriangle",
				"droplet",
				"dropletOff",
				"dumbbell",
				"edit",
				"envelope",
				"envelopes",
				"euroSignBadge",
				"euroSignCircle",
				"euroSign",
				"euroSignHexagon",
				"euroSignRRect",
				"euroSignSmall",
				"euroSignTriangle",
				"exclamationBadge",
				"exclamationCircle",
				"exclamation",
				"exclamationHexagon",
				"exclamationRRect",
				"exclamationSmall",
				"exclamationTriangle",
				"explicit",
				"eyeClosed",
				"eyeOff",
				"eyeOpened",
				"eyedropper",
				"faceNeutral",
				"faceSad",
				"faceSmile",
				"faceSmileTeeth",
				"faceSurprise",
				"fastForward10",
				"fastForward15",
				"fastForward5",
				"fastForward",
				"fileArrowDown",
				"fileArrowLeft",
				"fileArrowRight",
				"fileArrowUp",
				"fileCheck",
				"fileCode",
				"fileCross",
				"fileDollar",
				"fileDotted",
				"file",
				"fileHeart",
				"fileMinus",
				"fileOff",
				"filePlus",
				"fileScan",
				"fileShredder",
				"fileText",
				"files",
				"filmRoll",
				"filmStrip",
				"filter",
				"filterLines",
				"fingerprint",
				"fire",
				"flagChevron",
				"flagTriangle",
				"flagWavy",
				"flame",
				"floppyDisk",
				"folderArrowDown",
				"folderArrowLeft",
				"folderArrowRight",
				"folderArrowUp",
				"folderCheck",
				"folderCloud",
				"folderCross",
				"folder",
				"folderHeart",
				"folderImage",
				"folderMinus",
				"folderMusic",
				"folderOff",
				"folderOpen",
				"folderPlus",
				"folderZip",
				"forkKnife",
				"forkSpoon",
				"formatBold",
				"formatCode",
				"formatItalic",
				"formatStrikethrough",
				"formatUnderline",
				"frame",
				"ghost",
				"gift",
				"glasses3d",
				"glasses",
				"globe1Line",
				"globe2Lines",
				"globeEast",
				"globeStand",
				"globeWest",
				"grapes",
				"grid2",
				"grid2Plus",
				"grid3",
				"gridDividers",
				"grip",
				"handFistBack",
				"handFistFront",
				"hashtagBadge",
				"hashtagCircle",
				"hashtag",
				"hashtagHexagon",
				"hashtagRRect",
				"hashtagSmall",
				"hashtagStraightBadge",
				"hashtagStraightCircle",
				"hashtagStraight",
				"hashtagStraightHexagon",
				"hashtagStraightRRect",
				"hashtagStraightSmall",
				"hashtagStraightTriangle",
				"hashtagTriangle",
				"hatGangster",
				"hdd",
				"headphonesAlt1",
				"headphones",
				"heart",
				"heartOff",
				"history",
				"homeBird",
				"home",
				"homeLine",
				"homeSimple",
				"hourglass",
				"imageArrowDown",
				"imageArrowUp",
				"imageCheck",
				"imageCircle",
				"imageCross",
				"image",
				"imageEdit",
				"imageFilters",
				"imageMinus",
				"imageOff",
				"imagePlus",
				"inboxEmpty",
				"inboxFilled",
				"inboxIn",
				"inboxOut",
				"infinityBadge",
				"infinityCircle",
				"infinity",
				"infinityHexagon",
				"infinityRRect",
				"infinitySmall",
				"infinityTriangle",
				"infoBadge",
				"infoCircle",
				"info",
				"infoHexagon",
				"infoRRect",
				"infoSmall",
				"infoTriangle",
				"key",
				"keySkeleton",
				"keyboard",
				"keyboardHide",
				"keyboardShow",
				"kiwi",
				"knife",
				"knifeForkCross",
				"knifeSpoonCross",
				"lampDesk",
				"landscape",
				"laptop",
				"layoutGrid3",
				"layoutLeftBar",
				"layoutLeftBarGrid2",
				"layoutRightBar",
				"layoutRightBarGrid2",
				"layoutSplitGrid2",
				"layoutSplitGrid3",
				"layoutSplitHorizontal",
				"layoutSplitVertical",
				"layoutSplitsHorizontal3",
				"layoutSplitsVertical3",
				"layoutTopBarGrid2",
				"layoutTopBarLeftBar",
				"layoutTopBarLeftBarGrid2",
				"layoutTopBarRightBar",
				"layoutTopBarRightBarGrid2",
				"layoutTopBarSplitVertical",
				"layoutTopBarSplitsVertical3",
				"leaf",
				"lemon",
				"lifeRing",
				"lightBulb",
				"lightBulbOff",
				"lightningBolt",
				"lightningBoltOff",
				"lineHeight",
				"linkBreak",
				"linkBreakHorizontal",
				"linkBreakTilt45",
				"link",
				"linkHorizontal",
				"linkSimpleBreak",
				"linkSimpleBreakTilt45",
				"linkSimple",
				"linkSimpleHorizontalBreak",
				"linkSimpleHorizontal",
				"linkSimpleTilt45",
				"linkTilt45",
				"listAdd",
				"listBullets",
				"listCheck",
				"list",
				"listMusic",
				"listNumbers",
				"listPlay",
				"listRadio",
				"locationArrow",
				"locationArrowTilt45",
				"locationTarget",
				"locationTargetOff",
				"lockClosed",
				"lockOff",
				"lockOpened",
				"lockRoundClosed",
				"lockRoundOff",
				"lockRoundOpened",
				"luggageCart",
				"magicStick",
				"magnifyingGlass",
				"magnifyingGlassMinus",
				"magnifyingGlassPlus",
				"map3Folds",
				"martiniGlass",
				"medal",
				"mediaLibrary",
				"megaphone",
				"menuBurger",
				"menuBurgerModern",
				"menuBurgerStairs",
				"meteor",
				"microphone",
				"microphoneOff",
				"minusBadge",
				"minusCircle",
				"minus",
				"minusHexagon",
				"minusRRect",
				"minusSmall",
				"minusTriangle",
				"moneyBill",
				"monitor",
				"moon",
				"mouse",
				"musicLibrary",
				"musicNote",
				"musicNoteSimple",
				"nightCloudy",
				"nightFog",
				"nightLightning",
				"nightRain",
				"nightRainLight",
				"nightRainLightLightning",
				"nightSnow",
				"nightSnowLight",
				"nightSnowLightLightning",
				"notebook",
				"notepad",
				"notepadText",
				"notification",
				"orange",
				"paintBucket",
				"paintRoll",
				"paperclip",
				"paperclipOff",
				"paperclipTilt45",
				"paperclipTilt45Off",
				"paperplane",
				"paperplaneTilt45",
				"path",
				"pauseCircle",
				"pause",
				"peach",
				"pear",
				"pen",
				"penLine",
				"penNibDraw",
				"penNib",
				"penOff",
				"pepper",
				"percentBadge",
				"percentCircle",
				"percent",
				"percentHexagon",
				"percentRRect",
				"percentSmall",
				"percentTriangle",
				"personWalking",
				"phoneCheck",
				"phoneCross",
				"phoneDown",
				"phone",
				"phoneHangUp",
				"phoneIncoming",
				"phoneMinus",
				"phoneOff",
				"phoneOutgoing",
				"phonePause",
				"phonePickUp",
				"phonePlus",
				"phoneSignal",
				"phoneTransfer",
				"pictureInPicture",
				"pinCircle",
				"pinMapCheck",
				"pinMapCross",
				"pinMap",
				"pinMapMinus",
				"pinMapOff",
				"pinMapPlus",
				"pinMapRoundCircle",
				"pinMapRound",
				"pizza",
				"plane",
				"planetRing",
				"playCircle",
				"play",
				"plusBadge",
				"plusCircle",
				"plus",
				"plusHexagon",
				"plusRRect",
				"plusSmall",
				"plusTriangle",
				"popCorn",
				"powerOffBadge",
				"powerOffCircle",
				"powerOff",
				"powerOffHexagon",
				"powerOffRRect",
				"powerOffSmall",
				"powerOffTriangle",
				"powerPlug",
				"powerPlugOff",
				"presentationActivity",
				"presentationChart",
				"printer",
				"printerOff",
				"quality4k",
				"qualityHigh",
				"questionBadge",
				"questionCircle",
				"question",
				"questionHexagon",
				"questionRRect",
				"questionSmall",
				"questionTriangle",
				"quoteLeft",
				"quoteRight",
				"quotes",
				"radio",
				"rainDrops",
				"receiptBill",
				"receipt",
				"receiptList",
				"receiptText",
				"record",
				"redoCompactBadge",
				"redoCompactCircle",
				"redoCompact",
				"redoCompactHexagon",
				"redoCompactRRect",
				"redoCompactSmall",
				"redoCompactTriangle",
				"repeat1",
				"repeat",
				"replay",
				"rewind10",
				"rewind15",
				"rewind5",
				"rewind",
				"rocket",
				"rocketTilt45",
				"rotateAndCrop",
				"ruler",
				"rulerTilt45",
				"scan",
				"scanFace",
				"scissors",
				"scroll",
				"sdCard",
				"seedling",
				"server",
				"share",
				"shieldCheck",
				"shield",
				"shieldOff",
				"shoppingBasket",
				"shoppingCart",
				"shoppingCartSimple",
				"shuffle",
				"sigma",
				"skipBack",
				"skipForward",
				"sleep",
				"sliders2Horizontal",
				"sliders2Vertical",
				"sliders3Horizontal",
				"sliders3Vertical",
				"smartphone",
				"snowflake",
				"sortAlphaAZ",
				"sortAlphaZA",
				"sortNum19",
				"sortNum91",
				"speakerHigh",
				"speakerLow",
				"speakerMute",
				"speakerNoVolume",
				"speakerOff",
				"speed",
				"spinerLines",
				"stack",
				"star",
				"starOff",
				"sticker",
				"stickerText",
				"stopCircle",
				"stop",
				"stopwatch",
				"stopwatchOff",
				"strawberry",
				"subtitle",
				"sun",
				"superhero",
				"swatchbook",
				"tablet",
				"tabs",
				"tag",
				"tagTilt45",
				"tags",
				"tagsTilt45",
				"tank",
				"target",
				"targetSimple",
				"temperatureEmpty",
				"temperatureFull",
				"temperatureHalf",
				"temperatureQuarter",
				"temperatureThreeQuarter",
				"terminal",
				"textAlignCenter",
				"textAlignCenterSmall",
				"textAlignJustify",
				"textAlignJustifySmall",
				"textAlignLeft",
				"textAlignLeftSmall",
				"textAlignRight",
				"textAlignRightSmall",
				"text",
				"textIndent",
				"textOff",
				"textSize",
				"textUnindent",
				"textWidth",
				"thermometer",
				"thumbsDown",
				"thumbsUp",
				"ticket",
				"timer",
				"toggleOff",
				"toggleOn",
				"tomato",
				"tornado",
				"train",
				"trainSubway",
				"trainTram",
				"trash",
				"trashSimple",
				"treeCloud",
				"treePine",
				"treePointy",
				"treeRound",
				"trophy",
				"truck",
				"truckMedical",
				"tv",
				"ufo",
				"umbrella",
				"undoCompactBadge",
				"undoCompactCircle",
				"undoCompact",
				"undoCompactHexagon",
				"undoCompactRRect",
				"undoCompactSmall",
				"undoCompactTriangle",
				"usbDrive",
				"userArrowDown",
				"userArrowDownLeft",
				"userArrowDownRight",
				"userArrowLeft",
				"userArrowRight",
				"userArrowUp",
				"userArrowUpLeft",
				"userArrowUpRight",
				"userBadge",
				"userCard",
				"userCardId",
				"userCheck",
				"userCircle",
				"userCross",
				"user",
				"userExclamation",
				"userHexagon",
				"userMinus",
				"userPlus",
				"userRRect",
				"userTriangle",
				"users",
				"video",
				"videoOff",
				"voicemail",
				"wallet",
				"walletMinus",
				"walletPlus",
				"watchRect",
				"watchRound",
				"watermelon",
				"waveform",
				"webcam",
				"webcamOff",
				"weightMachine",
				"wheelchair",
				"wifi",
				"wifiOff",
				"wind",
				"wineGlass",
				"wrench",
				"wrenchTilt45",
				"yinYang"],
            control: { type: 'select' }
        },
        iconStyle: {
            options: ['line', 'fill', 'duotone'],
            control: { type: 'radio' }
        },
        color: { control: 'color' },
        secondaryColor: { control: 'color' },
        opacity: { control: 'number' },
        secondaryOpacity: { control: 'number' },
        size: { control: 'number' },
        flippedH: { control: 'boolean' },
        flippedV: { control: 'boolean' },
    },
};

const Template: Story<any> = (args) => {
    const dbIconProps: DbIconProps = {
        iconName: args.iconName,
		iconStyle: args.iconStyle,
        color: args.color,
        secondaryColor: args.secondaryColor,
        opacity: args.opacity,
        secondaryOpacity: args.secondaryOpacity,
        size: args.size,
        flippedH: args.flippedH,
        flippedV: args.flippedV,
    }
    return (<DbIcon {...dbIconProps} />);
};

export const Icon = Template.bind({});
Icon.args = {
    iconName: "watermelon",
    iconStyle: "line",
    color: "black",
    secondaryColor: "black",
    opacity: 1.0,
    secondaryOpacity: 0.16,
    size: 128.0,
    flippedH: false,
    flippedV: false,
};

