/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $gvars = Opal.gvars;

  Opal.add_stubs(['$setPrefixes', '$===', '$to_i', '$==', '$>', '$checkRoll', '$roll', '$collect', '$split', '$count', '$<=', '$+', '$empty?', '$!=', '$*']);
  return (function($base, $super) {
    function $Airgetlamh(){};
    var self = $Airgetlamh = $klass($base, $super, 'Airgetlamh', $Airgetlamh);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_9;

    def.sortType = nil;
    Opal.defn(self, '$initialize', TMP_1 = function $$initialize() {
      var $a, $b, self = this, $iter = TMP_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

      TMP_1.$$p = null;
      $zuper = [];
      
      for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
        $zuper[$zuper_index] = arguments[$zuper_index];
      }
      ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_1, false)), $a.$$p = $iter, $a).apply($b, $zuper);
      return self.sortType = 1;
    }, TMP_1.$$arity = 0);

    self.$setPrefixes([["(\\d+)?A(A|L)(\\d+)?((x|\\*)(\\d+)(\\+(\\d+))?)?(C(\\d+))?"]]);

    Opal.defn(self, '$gameName', TMP_2 = function $$gameName() {
      var self = this;

      return "朱の孤塔のエアゲトラム";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_3 = function $$gameType() {
      var self = this;

      return "Airgetlamh";
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_4 = function $$getHelpMessage() {
      var self = this;

      return "【Reg2.0『THE ANSWERER』～】\n・調査判定（成功数を表示）：[n]AA[m]\n・命中判定（ダメージ表示）：[n]AA[m]*p[+t][Cx]\n【～Reg1.1『昇華』】\n・調査判定（成功数を表示）：[n]AL[m]\n・命中判定（ダメージ表示）：[n]AL[m]*p\n----------------------------------------\n[]内のコマンドは省略可能。\n\n「n」でダイス数（攻撃回数）を指定。省略時は「2」。\n「m」で目標値を指定。省略時は「6」。\n「p」で威力を指定。「*」は「x」で代用可。\n「+t」でクリティカルトリガーを指定。省略可。\n「Cx」でクリティカル値を指定。省略時は「1」、最大値は「3」、「0」でクリティカル無し。\n\n攻撃力指定で命中判定となり、成功数ではなく、ダメージを結果表示します。\nクリティカルヒットの分だけ、自動で振り足し処理を行います。\n（ALコマンドではクリティカル処理を行いません）\n\n【書式例】\n・AL → 2d10で目標値6の調査判定。\n・5AA7*12 → 5d10で目標値7、威力12の命中判定。\n・AA7x28+5 → 2d10で目標値7、威力28、クリティカルトリガー5の命中判定。\n・9aa5*10C2 → 9d10で目標値5、威力10、クリティカル値2の命中判定。\n・15AAx4c0 → 15d10で目標値6、威力4、クリティカル無しの命中判定。\n";
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$rollDiceCommand', TMP_5 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, diceCount = nil, target = nil, damage = nil, criticalTrigger = nil, criticalNumber = nil;

      if ((($a = /(\d+)?A(A|L)(\d+)?((x|\*)(\d+)(\+(\d+))?)?(C(\d+))?$/i['$==='](command)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        diceCount = (((($a = (($b = $gvars['~']) === nil ? nil : $b['$[]'](1))) !== false && $a !== nil && $a != null) ? $a : 2)).$to_i();
        target = (((($a = (($b = $gvars['~']) === nil ? nil : $b['$[]'](3))) !== false && $a !== nil && $a != null) ? $a : 6)).$to_i();
        damage = (((($a = (($b = $gvars['~']) === nil ? nil : $b['$[]'](6))) !== false && $a !== nil && $a != null) ? $a : 0)).$to_i();
        if ((($a = ((($b = $gvars['~']) === nil ? nil : $b['$[]'](2))['$==']("L"))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          criticalTrigger = 0;
          criticalNumber = 0;
          } else {
          criticalTrigger = (((($a = (($b = $gvars['~']) === nil ? nil : $b['$[]'](8))) !== false && $a !== nil && $a != null) ? $a : 0)).$to_i();
          criticalNumber = (((($a = (($b = $gvars['~']) === nil ? nil : $b['$[]'](10))) !== false && $a !== nil && $a != null) ? $a : 1)).$to_i();
        };
        if ((($a = ($rb_gt(criticalNumber, 4))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          criticalNumber = 3};
        return self.$checkRoll(diceCount, target, damage, criticalTrigger, criticalNumber);};
      return nil;
    }, TMP_5.$$arity = 1);

    return (Opal.defn(self, '$checkRoll', TMP_9 = function $$checkRoll(diceCount, target, damage, criticalTrigger, criticalNumber) {
      var $a, $b, $c, TMP_6, $d, TMP_7, $e, TMP_8, self = this, totalSuccessCount = nil, totalCriticalCount = nil, text = nil, rollCount = nil, dice = nil, diceText = nil, diceArray = nil, successCount = nil, criticalCount = nil, result = nil, isDamage = nil, totalDamage = nil;

      totalSuccessCount = 0;
      totalCriticalCount = 0;
      text = "";
      rollCount = diceCount;
      while ((($b = $rb_gt(rollCount, 0)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
      $c = self.$roll(rollCount, 10, self.sortType), $b = Opal.to_ary($c), dice = ($b[0] == null ? nil : $b[0]), diceText = ($b[1] == null ? nil : $b[1]), $c;
      diceArray = ($b = ($c = diceText.$split(/,/)).$collect, $b.$$p = (TMP_6 = function(i){var self = TMP_6.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6), $b).call($c);
      successCount = ($b = ($d = diceArray).$count, $b.$$p = (TMP_7 = function(i){var self = TMP_7.$$s || this;
if (i == null) i = nil;
      return $rb_le(i, target)}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7), $b).call($d);
      criticalCount = ($b = ($e = diceArray).$count, $b.$$p = (TMP_8 = function(i){var self = TMP_8.$$s || this;
if (i == null) i = nil;
      return $rb_le(i, criticalNumber)}, TMP_8.$$s = self, TMP_8.$$arity = 1, TMP_8), $b).call($e);
      totalSuccessCount = $rb_plus(totalSuccessCount, successCount);
      totalCriticalCount = $rb_plus(totalCriticalCount, criticalCount);
      if ((($b = (text['$empty?']())) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        } else {
        text = $rb_plus(text, "+")
      };
      text = $rb_plus(text, "" + (successCount) + "[" + (diceText) + "]");
      rollCount = criticalCount;};
      result = "";
      isDamage = (damage['$!='](0));
      if ((($a = (isDamage)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        totalDamage = $rb_plus($rb_times(totalSuccessCount, damage), $rb_times(totalCriticalCount, criticalTrigger));
        result = $rb_plus(result, "(" + (diceCount) + "D10<=" + (target) + ") ＞ " + (text) + " ＞ Hits：" + (totalSuccessCount) + "*" + (damage));
        if ((($a = ($rb_gt(criticalTrigger, 0))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          result = $rb_plus(result, " + Trigger：" + (totalCriticalCount) + "*" + (criticalTrigger))};
        result = $rb_plus(result, " ＞ " + (totalDamage) + "ダメージ");
        } else {
        result = $rb_plus(result, "(" + (diceCount) + "D10<=" + (target) + ") ＞ " + (text) + " ＞ 成功数：" + (totalSuccessCount))
      };
      if ((($a = ($rb_gt(totalCriticalCount, 0))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        result = $rb_plus(result, " / " + (totalCriticalCount) + "クリティカル")};
      return result;
    }, TMP_9.$$arity = 5), nil) && 'checkRoll';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);
