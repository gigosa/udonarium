/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $gvars = Opal.gvars, $hash = Opal.hash, $hash2 = Opal.hash2;

  Opal.add_stubs(['$setPrefixes', '$debug', '$getJudgeResult', '$nil?', '$navigationResult', '$getFireResult', '$getBomberResult', '$getAvoidResult', '$===', '$empty?', '$to_i', '$roll', '$<=', '$floor', '$/', '$+', '$[]', '$to_s', '$min', '$getFirePoint', '$getFirePointText', '$!=', '$getDirectionInfo', '$times', '$<<', '$each', '$split', '$getMovePoint', '$isInMapPosition', '$join', '$slice', '$scanFirePoints', '$size', '$gsub', '$[]=', '$-']);
  return (function($base, $super, $parent_nesting) {
    function $Skynauts(){};
    var self = $Skynauts = $klass($base, $super, 'Skynauts', $Skynauts);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Skynauts_initialize_1, TMP_Skynauts_gameName_2, TMP_Skynauts_gameType_3, TMP_Skynauts_getHelpMessage_4, TMP_Skynauts_rollDiceCommand_5, TMP_Skynauts_getJudgeResult_6, TMP_Skynauts_navigationResult_7, TMP_Skynauts_getDirectionInfo_8, TMP_Skynauts_getFireResult_9, TMP_Skynauts_getFirePoint_12, TMP_Skynauts_getFirePointText_15, TMP_Skynauts_isInMapPosition_16, TMP_Skynauts_getMovePoint_17, TMP_Skynauts_getBomberResult_18, TMP_Skynauts_getAvoidResult_19, TMP_Skynauts_scanFirePoints_22;

    
    self.$setPrefixes(["D.*", "2[Dd]6<=.*", "SN.*", "NV.*", "AVO.*", "BOM.*"]);
    
    Opal.defn(self, '$initialize', TMP_Skynauts_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_Skynauts_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_Skynauts_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_Skynauts_initialize_1, false), $zuper, $iter);
      return (self.fractionType = "omit");
    }, TMP_Skynauts_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_Skynauts_gameName_2 = function $$gameName() {
      var self = this;

      return "歯車の塔の探空士"
    }, TMP_Skynauts_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Skynauts_gameType_3 = function $$gameType() {
      var self = this;

      return "Skynauts"
    }, TMP_Skynauts_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Skynauts_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "◆判定　(SNn)、(2D6<=n)　n:目標値（省略時:7）\n" + "　例）SN5　SN5　SN(3+2)\n" + "◆航行チェック　(NV+n)　n:修正値（省略時:0）\n" + "　例）NV　NV+1\n" + "◆ダメージチェック　(Dx/y@m)　x:ダメージ左側の値、y:ダメージ右側の値\n" + "　m:《弾道学》（省略可）上:8、下:2、左:4、右:6\n" + "　飛空艇シート外の座標は()が付きます。\n" + "　例） D/4　D19/2　D/3@8　D[大揺れ]/2\n" + "◆砲撃判定+ダメージチェック　(BOMn/Dx/y@m)　n:目標値（省略時:7）\n" + "　x:ダメージ左側の値、y:ダメージ右側の値\n" + "　m:《弾道学》（省略可）上:8、下:2、左:4、右:6\n" + "　例） BOM/D/4　BOM9/D19@4\n" + "◆《回避運動》　(AVOn@mXX)　n:目標値（省略時:7）\n" + "　m:回避方向。上:8、下:2、左:4、右:6、XX：ダメージチェック結果\n" + "　例）\n" + "　AVO9@8[縦1,横4],[縦2,横6],[縦3,横8]　AVO@2[縦6,横4],[縦2,横6]\n"
    }, TMP_Skynauts_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_Skynauts_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var self = this, result = nil;

      
      self.$debug("\n=======================================\n");
      self.$debug("rollDiceCommand command", command);
      result = self.$getJudgeResult(command);
      if ($truthy(result['$nil?']())) {
        } else {
        return result
      };
      result = self.$navigationResult(command);
      if ($truthy(result['$nil?']())) {
        } else {
        return result
      };
      result = self.$getFireResult(command);
      if ($truthy(result['$nil?']())) {
        } else {
        return result
      };
      result = self.$getBomberResult(command);
      if ($truthy(result['$nil?']())) {
        } else {
        return result
      };
      result = self.$getAvoidResult(command);
      if ($truthy(result['$nil?']())) {
        } else {
        return result
      };
      self.$debug("rollCommand result");
      return nil;
    }, TMP_Skynauts_rollDiceCommand_5.$$arity = 1);
    
    Opal.defn(self, '$getJudgeResult', TMP_Skynauts_getJudgeResult_6 = function $$getJudgeResult(command) {
      var $a, $b, self = this, reg1 = nil, target = nil, total = nil, diceText = nil, result = nil, text = nil;

      
      if ($truthy(($truthy($a = /^2D6<=(\d)$/i['$==='](command)) ? $a : /^SN(\d*)$/i['$==='](command)))) {
        } else {
        return nil
      };
      reg1 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1));
      self.$debug("====getJudgeResult====");
      target = (function() {if ($truthy(reg1['$empty?']())) {
        return 7
        } else {
        return reg1.$to_i()
      }; return nil; })();
      self.$debug("目標値", target);
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      if ($truthy($rb_le(total, 2))) {
        result = "ファンブル"
      } else if ($truthy($rb_le(total, target))) {
        result = "成功"
        } else {
        result = "失敗"
      };
      text = "" + "(2D6<=" + (target) + ") ＞ " + (total) + "[" + (diceText) + "] ＞ " + (total) + " ＞ " + (result);
      return text;
    }, TMP_Skynauts_getJudgeResult_6.$$arity = 1);
    
    Opal.defn(self, '$navigationResult', TMP_Skynauts_navigationResult_7 = function $$navigationResult(command) {
      var $a, $b, self = this, reg2 = nil, bonus = nil, total = nil, movePointBase = nil, movePoint = nil, text = nil;

      
      if ($truthy(/^NV(\+(\d+))?$/['$==='](command))) {
        } else {
        return nil
      };
      reg2 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      self.$debug("====navigationResult====");
      bonus = reg2.$to_i();
      self.$debug("移動修正", bonus);
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), $b;
      movePointBase = (function() {if ($truthy($rb_le($rb_divide(total, 2).$floor(), 0))) {
        return 1
        } else {
        return $rb_divide(total, 2).$floor()
      }; return nil; })();
      movePoint = $rb_plus(movePointBase, bonus);
      self.$debug("移動エリア数", movePoint);
      text = "" + "航行チェック(最低1)　(1D6/2+" + (bonus) + ") ＞ " + (total) + " /2+" + (bonus) + " ＞ ";
      text = $rb_plus(text, "" + (movePointBase) + "+" + (bonus) + " ＞ " + (movePoint) + "エリア進む");
      return text;
    }, TMP_Skynauts_navigationResult_7.$$arity = 1);
    (Opal.class_variable_set($Skynauts, '@@directionInfos', $hash(1, $hash2(["name", "position_diff"], {"name": "左下", "position_diff": $hash2(["x", "y"], {"x": -1, "y": 1})}), 2, $hash2(["name", "position_diff"], {"name": "下", "position_diff": $hash2(["x", "y"], {"x": 0, "y": 1})}), 3, $hash2(["name", "position_diff"], {"name": "右下", "position_diff": $hash2(["x", "y"], {"x": 1, "y": 1})}), 4, $hash2(["name", "position_diff"], {"name": "左", "position_diff": $hash2(["x", "y"], {"x": -1, "y": 0})}), 6, $hash2(["name", "position_diff"], {"name": "右", "position_diff": $hash2(["x", "y"], {"x": 1, "y": 0})}), 7, $hash2(["name", "position_diff"], {"name": "左上", "position_diff": $hash2(["x", "y"], {"x": -1, "y": -1})}), 8, $hash2(["name", "position_diff"], {"name": "上", "position_diff": $hash2(["x", "y"], {"x": 0, "y": -1})}), 9, $hash2(["name", "position_diff"], {"name": "右上", "position_diff": $hash2(["x", "y"], {"x": 1, "y": -1})}))));
    
    Opal.defn(self, '$getDirectionInfo', TMP_Skynauts_getDirectionInfo_8 = function $$getDirectionInfo(direction, key, defaultValue) {
      var $a, self = this, info = nil;

      if (defaultValue == null) {
        defaultValue = nil;
      }
      
      info = (($a = $Skynauts.$$cvars['@@directionInfos']) == null ? nil : $a)['$[]'](direction.$to_i());
      if ($truthy(info['$nil?']())) {
        return defaultValue};
      return info['$[]'](key);
    }, TMP_Skynauts_getDirectionInfo_8.$$arity = -3);
    
    Opal.defn(self, '$getFireResult', TMP_Skynauts_getFireResult_9 = function $$getFireResult(command) {
      var $a, self = this, reg1 = nil, reg3 = nil, reg5 = nil, fireCount = nil, fireRange = nil, ballistics = nil, fireCountMax = nil, firePoint = nil, fireText = nil, text = nil;

      
      if ($truthy(/^D([1-4, 6-9]*)(\[.+\])*\/(\d+)(@([2,4,6,8]))?$/['$==='](command))) {
        } else {
        return nil
      };
      reg1 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1));
      reg3 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      reg5 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](5));
      self.$debug("====getFireResult====");
      fireCount = reg3.$to_i();
      fireRange = reg1.$to_s();
      ballistics = reg5.$to_i();
      self.$debug("fireCount", fireCount);
      self.$debug("fireRange", fireRange);
      self.$debug("ballistics", ballistics);
      fireCountMax = 25;
      fireCount = [fireCount, fireCountMax].$min();
      firePoint = self.$getFirePoint(fireRange, fireCount);
      fireText = self.$getFirePointText(firePoint, fireCount);
      if ($truthy(ballistics['$!='](0))) {
        
        fireText = $rb_plus(fireText, " ＞ 《弾道学》:");
        fireText = $rb_plus(fireText, self.$getDirectionInfo(ballistics, "name", ""));
        fireText = $rb_plus(fireText, "\n ＞ ");
        fireText = $rb_plus(fireText, self.$getFirePointText(firePoint, fireCount, ballistics));};
      text = "" + (command) + " ＞ " + (fireText);
      return text;
    }, TMP_Skynauts_getFireResult_9.$$arity = 1);
    
    Opal.defn(self, '$getFirePoint', TMP_Skynauts_getFirePoint_12 = function $$getFirePoint(fireRange, fireCount) {
      var TMP_10, self = this, firePoint = nil;

      
      self.$debug("====getFirePoint====");
      firePoint = [];
      $send(fireCount, 'times', [], (TMP_10 = function(count){var self = TMP_10.$$s || this, $a, $b, TMP_11, yPos = nil, xPos = nil, position = nil;
if (count == null) count = nil;
      
        self.$debug("\n砲撃回数", $rb_plus(count, 1));
        firePoint['$<<']([]);
        $b = self.$roll(1, 6), $a = Opal.to_ary($b), (yPos = ($a[0] == null ? nil : $a[0])), $b;
        $b = self.$roll(2, 6), $a = Opal.to_ary($b), (xPos = ($a[0] == null ? nil : $a[0])), $b;
        position = [xPos, yPos];
        firePoint['$[]'](-1)['$<<'](position);
        self.$debug("着弾点", firePoint);
        return $send(fireRange.$split(/(?:)/), 'each', [], (TMP_11 = function(rangeText){var self = TMP_11.$$s || this, position_diff = nil;
if (rangeText == null) rangeText = nil;
        
          self.$debug("範囲", rangeText);
          position_diff = self.$getDirectionInfo(rangeText, "position_diff", $hash2([], {}));
          position = [$rb_plus(xPos, position_diff['$[]']("x").$to_i()), $rb_plus(yPos, position_diff['$[]']("y").$to_i())];
          firePoint['$[]'](-1)['$<<'](position);
          return self.$debug("着弾点:範囲", firePoint);}, TMP_11.$$s = self, TMP_11.$$arity = 1, TMP_11));}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10));
      self.$debug("\n最終着弾点", firePoint);
      return firePoint;
    }, TMP_Skynauts_getFirePoint_12.$$arity = 2);
    
    Opal.defn(self, '$getFirePointText', TMP_Skynauts_getFirePointText_15 = function $$getFirePointText(firePoint, fireCount, direction) {
      var TMP_13, self = this, fireTextList = nil, fireText = nil;

      if (direction == null) {
        direction = 0;
      }
      
      self.$debug("====getFirePointText====");
      fireTextList = [];
      $send(firePoint, 'each', [], (TMP_13 = function(point){var self = TMP_13.$$s || this, TMP_14, text = nil;
if (point == null) point = nil;
      
        text = "";
        $send(point, 'each', [], (TMP_14 = function(x, y){var self = TMP_14.$$s || this, $a, $b;
if (x == null) x = nil;if (y == null) y = nil;
        
          $b = self.$getMovePoint(x, y, direction), $a = Opal.to_ary($b), (x = ($a[0] == null ? nil : $a[0])), (y = ($a[1] == null ? nil : $a[1])), $b;
          text = $rb_plus(text, (function() {if ($truthy(self.$isInMapPosition(x, y))) {
            return "" + "[縦" + (y) + ",横" + (x) + "]"
            } else {
            return "" + "([縦" + (y) + ",横" + (x) + "])"
          }; return nil; })());
          return self.$debug("着弾点テキスト", text);}, TMP_14.$$s = self, TMP_14.$$arity = 2, TMP_14));
        return fireTextList['$<<'](text);}, TMP_13.$$s = self, TMP_13.$$arity = 1, TMP_13));
      fireText = fireTextList.$join(",");
      self.$debug("\n最終着弾点テキスト", fireText);
      return fireText;
    }, TMP_Skynauts_getFirePointText_15.$$arity = -3);
    
    Opal.defn(self, '$isInMapPosition', TMP_Skynauts_isInMapPosition_16 = function $$isInMapPosition(x, y) {
      var $a, $b, self = this;

      return ($truthy($a = (($b = $rb_le(1, y)) ? $rb_le(y, 6) : $rb_le(1, y))) ? (($b = $rb_le(2, x)) ? $rb_le(x, 12) : $rb_le(2, x)) : $a)
    }, TMP_Skynauts_isInMapPosition_16.$$arity = 2);
    
    Opal.defn(self, '$getMovePoint', TMP_Skynauts_getMovePoint_17 = function $$getMovePoint(x, y, direction) {
      var self = this, position_diff = nil;

      
      self.$debug("====getMovePoint====");
      self.$debug("方向", direction);
      self.$debug("座標移動前x", x);
      self.$debug("座標移動前y", y);
      position_diff = self.$getDirectionInfo(direction, "position_diff", $hash2([], {}));
      x = $rb_plus(x, position_diff['$[]']("x").$to_i());
      y = $rb_plus(y, position_diff['$[]']("y").$to_i());
      self.$debug("\n座標移動後x", x);
      self.$debug("座標移動後y", y);
      return [x, y];
    }, TMP_Skynauts_getMovePoint_17.$$arity = 3);
    
    Opal.defn(self, '$getBomberResult', TMP_Skynauts_getBomberResult_18 = function $$getBomberResult(command) {
      var $a, self = this, reg1 = nil, reg6 = nil, target = nil, direction = nil, text = nil, fireCommand = nil;

      
      if ($truthy(/^BOM(\d*)?\/D([1-4, 6-9]*)(\[.+\])*\/(\d+)(@([2,4,6,8]))?$/i['$==='](command))) {
        } else {
        return nil
      };
      reg1 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1));
      reg6 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](6));
      self.$debug("====getBomberResult====", command);
      target = reg1.$to_s();
      direction = reg6.$to_i();
      self.$debug("弾道学方向", direction);
      text = "" + (command) + " ＞ ";
      text = $rb_plus(text, self.$getJudgeResult($rb_plus("SN", target)));
      if ($truthy(/成功/['$==='](text))) {
        } else {
        return text
      };
      fireCommand = command.$slice(/D([1-4, 6-9]*)(\[.+\])*\/(\d+)(@([2,4,6,8]))?/);
      text = $rb_plus(text, "" + "\n ＞ " + (self.$getFireResult(fireCommand)));
      return text;
    }, TMP_Skynauts_getBomberResult_18.$$arity = 1);
    
    Opal.defn(self, '$getAvoidResult', TMP_Skynauts_getAvoidResult_19 = function $$getAvoidResult(command) {
      var $a, self = this, reg3 = nil, direction = nil, judgeCommand = nil, text = nil, pointCommand = nil, firePoint = nil, fireCount = nil;

      
      if ($truthy(/^AVO(\d*)?(@([2,4,6,8]))(\(?\[縦\d+,横\d+\]\)?,?)+$/['$==='](command))) {
        } else {
        return nil
      };
      reg3 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      self.$debug("====getAvoidResult====", command);
      direction = reg3.$to_i();
      self.$debug("回避方向", direction);
      judgeCommand = command.$slice(/^AVO(\d*)?(@([2,4,6,8]))/);
      text = "" + (judgeCommand) + " ＞ 《回避運動》";
      text = $rb_plus(text, self.$getJudgeResult($rb_plus("SN", (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_s())));
      if ($truthy(/成功/['$==='](text))) {
        } else {
        return text
      };
      pointCommand = command.$slice(/(\(?\[縦\d+,横\d+\]\)?,?)+/);
      firePoint = self.$scanFirePoints(pointCommand);
      fireCount = firePoint.$size();
      text = $rb_plus(text, "" + "\n ＞ " + (pointCommand));
      text = $rb_plus(text, " ＞ 《回避運動》:");
      text = $rb_plus(text, self.$getDirectionInfo(direction, "name", ""));
      text = $rb_plus(text, "\n ＞ ");
      text = $rb_plus(text, self.$getFirePointText(firePoint, fireCount, direction));
      return text;
    }, TMP_Skynauts_getAvoidResult_19.$$arity = 1);
    return (Opal.defn(self, '$scanFirePoints', TMP_Skynauts_scanFirePoints_22 = function $$scanFirePoints(command) {
      var TMP_20, self = this, firePoint = nil;

      
      self.$debug("====scanFirePoints====", command);
      command = command.$gsub(/\(|\)/, "");
      firePoint = [];
      $send(command.$split(/\],/), 'each', [], (TMP_20 = function(pointText){var self = TMP_20.$$s || this, TMP_21;
if (pointText == null) pointText = nil;
      
        self.$debug("pointText", pointText);
        firePoint['$<<']([]);
        return $send(pointText.$split(/\]/), 'each', [], (TMP_21 = function(point){var self = TMP_21.$$s || this, $a, y = nil, x = nil, $writer = nil;
if (point == null) point = nil;
        
          self.$debug("point", point);
          firePoint['$[]'](-1)['$<<']([]);
          if ($truthy(/[^\d]*(\d+),[^\d]*(\d+)/['$==='](point))) {
            } else {
            return nil;
          };
          y = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i();
          x = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2)).$to_i();
          
          $writer = [-1, [x, y]];
          $send(firePoint['$[]'](-1), '[]=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];;
          return self.$debug("着弾点", firePoint);}, TMP_21.$$s = self, TMP_21.$$arity = 1, TMP_21));}, TMP_20.$$s = self, TMP_20.$$arity = 1, TMP_20));
      return firePoint;
    }, TMP_Skynauts_scanFirePoints_22.$$arity = 1), nil) && 'scanFirePoints';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
