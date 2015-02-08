package {
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.text.TextField;
	import flash.external.ExternalInterface;

	public class Main extends Sprite {

		public function Main(){
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.EXACT_FIT;

			var txt:TextField = new TextField();
			txt.text = "Hello World";
			addChild(txt);

			ExternalInterface.call('console.log',ExternalInterface.objectID);
		}
	}
}