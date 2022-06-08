import { Avatar } from "@mui/material";

interface IAvatarProps {
    className?: string;
    name: string;
    colour: string;
    size?: number;
    fontSize?: number;
}

function getInitials(name: string) {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    let initials = [...name.matchAll(rgx)] || [];

    let string = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toString().toUpperCase();

    return string;
}

function standardize_colour(str: string) {
    var ctx = document.createElement("canvas").getContext("2d");
    if (ctx == null) {
        return "#000000";
    } else {
        ctx.fillStyle = str;
        return ctx.fillStyle.toString();
    }
}

function getColourBrightness(colour: string) {
    var c = standardize_colour(colour).substring(1); // strip #
    var rgb = parseInt(c, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 130) {
        return "white";
    } else {
        return "black";
    }
}

export default function AvatarCustom(props: IAvatarProps) {
    return (
        <Avatar
            className={props.className}
            sx={{
                bgcolor: props.colour,
                color: getColourBrightness(props.colour),
                fontFamily: "Inter-semibold",
                height: props.size,
                width: props.size,
                fontSize: props.fontSize,
            }}
        >
            {getInitials(props.name)}
        </Avatar>
    );
}
