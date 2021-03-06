var team_management_profile = `
<!DOCTYPE html>
<html>
<meta charset="uft-8">
<head>
	<title>팀-선수관리-프로필팝업</title>
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
	
	<style type="text/css">

		#pop-up{
		  width: 50%;
		  height: 40%;
		  margin: 40% auto;

		  font-size:15px;
		  font-family: 'Nanum Gothic';
		  color: black;
		  background-color: lightgray;
		  line-height: 50px;
		  border: solid 2px grey;
		  border-radius: 40px; 
		}

		#table{
			text-align: center;
			margin: 10px auto;
			align-items: center;
		}

		.options{
			font-size: 20px; 
			font-weight: bold;

		}
		
		#submit{
			width: 10px;
			height: 10px;
			background-color: gray;
			text-align: center;
			margin: auto;
			align-items: center;
		}
		
	</style>
</head>

<body>

	<div id="pop-up">
	   
		<table id="table" style="width: 100%; height: 100%;">
			<tr>
				<td colspan="3" style="font-size: 30px; font-weight: bold;">[Profile]</td>
			</tr>

			<!--포지션-->
			<tr>
				<td colspan="3" class="options">포         지         션</td>
			</tr>
			<tr>
				<td colspan="3">FW</td>
			</tr>

			<!--능력치-->
			<tr>
				<td class="options">나이</td>
				<td class="options">키</td>
				<td class="options">몸무게</td>
			</tr>
			<tr>
				<td>199</td>
				<td>165</td>
				<td>89</td>
			</tr>

			<!--스탯-->
			<tr>
				<td class="options">속도</td>
				<td class="options">드리블</td>
				<td class="options">개인기</td>
			</tr>
			<tr>
				<td>매우느림</td>
				<td>매우못함</td>
				<td>할줄모름</td>
			</tr>
		</table>

		
	</div>
</body>
</html>

`;

module.exports = team_management_profile;