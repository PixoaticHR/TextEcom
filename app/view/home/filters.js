import { Grid } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

const Filters = () => {
    const [isSelectIdeal, setIsSelectIdeal] = useState(false);
    const [showIdeal, setShowIdeal] = useState(false);
    const [showOccatian, setShowOccatian] = useState(false);
    const [isSelectOccatian, setIsSelectOccatian] = useState(false);
    const [showWork, setShowWork] = useState(false);
    const [isSelectWork, setIsSelectWork] = useState(false);
    const [showSegment, setShowSegment] = useState(false);
    const [isSelectSegment, setIsSelectSegment] = useState(false);
    const [showSuitable, setShowSuitable] = useState(false);
    const [isSelectSuitable, setIsSelectSuitable] = useState(false);
    const [showRaw, setShowRaw] = useState(false);
    const [isSelectRaw, setIsSelectRaw] = useState(false);
    const [showPattern, setShowPattern] = useState(false);
    const [isSelectPattern, setIsSelectPattern] = useState(false);

    return (
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
            <div class="flex items-center mb-4">
                <input id="Customizble" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="Customizble" class="ms-2 text-sm font-bold text-[#000]">Customizble</label>
            </div>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-sm font-bold text-[#000] cursor-pointer">IDEAL FOR</Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-right text-sm font-bold text-[#000] cursor-pointer" onClick={() => setShowIdeal(!showIdeal)}>{showIdeal ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Grid>
            </Grid>
            <span className="text-sm mb-4">All</span>
            {showIdeal && <>
                <br />
                <span className="text-xs underline mb-4" >{isSelectIdeal ? "Select All" : "Unselect All"}</span>
                <br />
                <div class="flex items-center mb-4">
                    <input id="menIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="menIdeal" class="ms-2 text-sm font-bold text-[#000]">Men</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="womenIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="womenIdeal" class="ms-2 text-sm font-bold text-[#000]">Women</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="babyIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="babyIdeal" class="ms-2 text-sm font-bold text-[#000]">Baby & Kids</label>
                </div>
            </>}

            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-sm font-bold text-[#000] cursor-pointer">OCCASION</Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-right text-sm font-bold text-[#000] cursor-pointer" onClick={() => setShowOccatian(!showOccatian)}>{showOccatian ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Grid>
            </Grid>
            <span className="text-sm mb-4">All</span>
            {showOccatian && <>
                <br />
                <span className="text-xs underline mb-4" >{isSelectOccatian ? "Select All" : "Unselect All"}</span>
                <br />
                <div class="flex items-center mb-4">
                    <input id="menIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="menIdeal" class="ms-2 text-sm font-bold text-[#000]">Men</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="womenIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="womenIdeal" class="ms-2 text-sm font-bold text-[#000]">Women</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="babyIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="babyIdeal" class="ms-2 text-sm font-bold text-[#000]">Baby & Kids</label>
                </div>
            </>}

            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-sm font-bold text-[#000] cursor-pointer">WORK</Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-right text-sm font-bold text-[#000] cursor-pointer" onClick={() => setShowWork(!showWork)}>{showWork ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Grid>
            </Grid>
            <span className="text-sm mb-4">All</span>
            {showWork && <>
                <br />
                <span className="text-xs underline mb-4" >{isSelectWork ? "Select All" : "Unselect All"}</span>
                <br />
                <div class="flex items-center mb-4">
                    <input id="menIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="menIdeal" class="ms-2 text-sm font-bold text-[#000]">Men</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="womenIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="womenIdeal" class="ms-2 text-sm font-bold text-[#000]">Women</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="babyIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="babyIdeal" class="ms-2 text-sm font-bold text-[#000]">Baby & Kids</label>
                </div>
            </>}

            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-sm font-bold text-[#000] cursor-pointer">SEGMENT</Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-right text-sm font-bold text-[#000] cursor-pointer" onClick={() => setShowSegment(!showSegment)}>{showSegment ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Grid>
            </Grid>
            <span className="text-sm mb-4">All</span>
            {showSegment && <>
                <br />
                <span className="text-xs underline mb-4" >{isSelectSegment ? "Select All" : "Unselect All"}</span>
                <br />
                <div class="flex items-center mb-4">
                    <input id="menIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="menIdeal" class="ms-2 text-sm font-bold text-[#000]">Men</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="womenIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="womenIdeal" class="ms-2 text-sm font-bold text-[#000]">Women</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="babyIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="babyIdeal" class="ms-2 text-sm font-bold text-[#000]">Baby & Kids</label>
                </div>
            </>}

            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-sm font-bold text-[#000] cursor-pointer">SUITABLE FOR</Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-right text-sm font-bold text-[#000] cursor-pointer" onClick={() => setShowSuitable(!showSuitable)}>{showSuitable ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Grid>
            </Grid>
            <span className="text-sm mb-4">All</span>
            {showSuitable && <>
                <br />
                <span className="text-xs underline mb-4" >{isSelectSuitable ? "Select All" : "Unselect All"}</span>
                <br />
                <div class="flex items-center mb-4">
                    <input id="menIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="menIdeal" class="ms-2 text-sm font-bold text-[#000]">Men</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="womenIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="womenIdeal" class="ms-2 text-sm font-bold text-[#000]">Women</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="babyIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="babyIdeal" class="ms-2 text-sm font-bold text-[#000]">Baby & Kids</label>
                </div>
            </>}

            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-sm font-bold text-[#000] cursor-pointer">RAW MATERIALS</Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-right text-sm font-bold text-[#000] cursor-pointer" onClick={() => setShowRaw(!showRaw)}>{showRaw ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Grid>
            </Grid>
            <span className="text-sm mb-4">All</span>
            {showRaw && <>
                <br />
                <span className="text-xs underline mb-4" >{isSelectRaw ? "Select All" : "Unselect All"}</span>
                <br />
                <div class="flex items-center mb-4">
                    <input id="menIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="menIdeal" class="ms-2 text-sm font-bold text-[#000]">Men</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="womenIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="womenIdeal" class="ms-2 text-sm font-bold text-[#000]">Women</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="babyIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="babyIdeal" class="ms-2 text-sm font-bold text-[#000]">Baby & Kids</label>
                </div>
            </>}

            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-sm font-bold text-[#000] cursor-pointer">PATTERN</Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-right text-sm font-bold text-[#000] cursor-pointer" onClick={() => setShowPattern(!showPattern)}>{showPattern ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Grid>
            </Grid>
            <span className="text-sm mb-4">All</span>
            {showPattern && <>
                <br />
                <span className="text-xs underline mb-4" >{isSelectPattern ? "Select All" : "Unselect All"}</span>
                <br />
                <div class="flex items-center mb-4">
                    <input id="menIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="menIdeal" class="ms-2 text-sm font-bold text-[#000]">Men</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="womenIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="womenIdeal" class="ms-2 text-sm font-bold text-[#000]">Women</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="babyIdeal" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="babyIdeal" class="ms-2 text-sm font-bold text-[#000]">Baby & Kids</label>
                </div>
            </>}
        </Grid>
    )
}
export default Filters;