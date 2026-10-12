type MasalaChai = {type : "masala"; spiceLevel : "number"}
type GingerChai = {type : "ginger"; amount : "number"}
type ElicheChai = {type : "eliche"; aroma : "number"}

type Chai = MasalaChai | GingerChai | ElicheChai

function MakeChai(order : Chai){
    switch (order.type) {
        case "masala":
            return `masala chai`
            break;
        case "ginger":
            return `ginger chai`
            break;
        case "eliche":
            return `elichi chai`
            break;

    }
}


function isStringArray(arr: unknown): arr is string[]{

}