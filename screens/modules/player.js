import player from "../../data_files/data_player.js";

const $player_window = () => {
  //  Name
  const $name = $("<div>")
    .text("")
    .attr("id", "playername")
    .attr("style", "50%")
    .css({
      color: "ghostwhite",
      "font-family": "Alagard",
      "font-size": "1rem",
    });

    const player_info = `${player.name} Lv ${player.level}`;
    $name.text(player_info);

  //* HP Box
  //  HP Progress Bar
  const $hpbar = $("<div>").attr("id", "playerhpbar").css({
    height: "0.5rem",
    width: "50%",
    "border-radius": "0.5rem",
    "background-color": "rgba(255,0,0,1)",
  });

  //  HP Progress Bar Cover
  const $hpbarcover = $("<div>")
    .attr("id", "playerhpbarcover")
    .css({
      "background-color": "	rgba(230, 255, 204, 1)",
      height: "0.5rem",
      width: "4rem",
      "border-radius": "1rem",
    })
    .append($hpbar);

  //  HP Value (text)
  const $hpvalue = $("<div>").attr("id", "playerhpvalue").text("50%").css({
    color: "rgba(255,0,0,1)",
    // width: "5rem",
    padding: "0 0.5rem 0 0",
    "text-align": "right",
  });

  //*  MP Box
  //  MP Progress Bar
  const $mpbar = $("<div>").attr("id", "playermpbar").css({
    height: "0.5rem",
    width: "50%",
    "border-radius": "0.5rem",
    "background-color": "rgba(0,0,255,1)",
  });

  // MP Progress Bar Cover
  const $mpbarcover = $("<div>")
    .attr("id", "playermpbarcover")
    .css({
      "background-color": "	rgba(230, 255, 204, 1)",
      height: "0.5rem",
      width: "4rem",
      "border-radius": "1rem",
    })
    .append($mpbar);

  //  MP Value (Text)
  const $mpvalue = $("<div>").attr("id", "playermpvalue").text("50%").css({
    color: "rgba(0,0,255,1)",
    // width: "5rem",
    padding: "0 0.5rem 0 0",
    "text-align": "right",
  });

  //  Holds all the HP Related bars
  const $hpmpvalues = $("<div>")
    .attr("id", "playerhpmpvalues")
    .css({
      display: "flex",
      "flex-direction": "column",
      gap: "0.2rem",
    })
    .append($hpvalue, $mpvalue);

  //  Holds all the MP Related bars
  const $hpmpbars = $("<div>")
    .attr("id", "playerhpmpbars")
    .css({
      display: "flex",
      "flex-direction": "column",
      gap: "0.5rem",
    })
    .append($hpbarcover, $mpbarcover);

  //  HP/MP Div holder
  const $hpmp = $("<div>")
    .attr("id", "playerhpmp")
    .css({
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
    })
    .append($hpmpvalues, $hpmpbars);

  //  Holds all the information above the player head
  const $infobox = $("<div>")
    .attr("id", "infobox")
    .css({
      "background-color": "rgba(0,0,0,0.5)",
      "border-radius": "1rem",
      padding: "1rem",
      "font-size": "0.7rem",
      display: "flex",
      "flex-direction": "column",
    })
    .append($name, $hpmp);

    //  Function to edit hp/mp values of player
  const updatevalues = () => {
    player.health = 2345; //  Placeholder, to check
    player.mana = 10; //  Placeholder, to check
    const style = document.documentElement.style;

    //

    const player_hp_info = `${player.health}/${player.health_max}`;
    $hpvalue.text(player_hp_info);
    const player_hp_bar = `${Math.ceil(
      (player.health / player.health_max) * 100
    )}%`;
    $hpbar.css({ width: player_hp_bar });
    style.setProperty("--healthpercent", "80%");
    style.setProperty("--new_healthpercent", player_hp_bar);
    $hpbar.addClass("hpanimation");

    //

    const player_mp_info = `${player.mana}/${player.mana_max}`;
    const player_mp_bar = `${Math.ceil(
      (player.mana / player.mana_max) * 100
    )}%`;
    $mpbar.css({ width: player_mp_bar });
    $mpvalue.text(player_mp_info);
  };

  const $playerimage = $("<div>").attr("id", "playerimage").css({
    "background-color": "blue",   //  Placeholder
    width: "5rem",                 //  Placeholder
    height: "9rem",                //  Placeholder
  });

  const $player = $("<div>")
    .attr("id", "playerbox")
    .css({
      width: "15%",
      height: "40%",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      padding: "3rem",
    })
    .append($infobox, $playerimage);

  //<div class="w3-container w3-round-xlarge w3-red w3-center" style="width:50%">50%</div>

  updatevalues();

  return $player;
};

export default $player_window;