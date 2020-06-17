/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$match', '$[]', '$makeDiceRoll', '$+', '$to_i', '$roll', '$each', '$split', '$==']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'YearZeroEngine');

    var $nesting = [self].concat($parent_nesting), $YearZeroEngine_rollDiceCommand$1, $YearZeroEngine_makeDiceRoll$2;

    
    Opal.const_set($nesting[0], 'ID', "YearZeroEngine");
    Opal.const_set($nesting[0], 'NAME', "\u30A4\u30E4\u30FC\u30BC\u30ED\u30A8\u30F3\u30B8\u30F3");
    Opal.const_set($nesting[0], 'SORT_KEY', "\u3044\u3084\u3042\u305B\u308D\u3048\u3093\u3057\u3093");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "\u30FB\u5224\u5B9A\u30B3\u30DE\u30F3\u30C9(YZEx+x+x)\n" + "  YZE(\u80FD\u529B\u30C0\u30A4\u30B9\u6570)+(\u6280\u80FD\u30C0\u30A4\u30B9\u6570)+(\u4FEE\u6B63\u30C0\u30A4\u30B9\u6570)  # YearZeroEngine(TALES FROM THE LOOP\u7B49)\u306E\u5224\u5B9A(6\u3092\u6570\u3048\u308B)\n" + "  \u203B \u6280\u80FD\u3068\u4FEE\u6B63\u30C0\u30A4\u30B9\u6570\u306F\u7701\u7565\u53EF\u80FD\n");
    Opal.const_set($nesting[0], 'ABILITY_INDEX', 2);
    Opal.const_set($nesting[0], 'SKILL_INDEX', 4);
    Opal.const_set($nesting[0], 'MODIFIED_INDEX', 6);
    self.$setPrefixes(["YZE.*"]);
    
    Opal.def(self, '$rollDiceCommand', $YearZeroEngine_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, m = nil, successDice = nil, matchText = nil, abilityDiceText = nil, diceCountText = nil, diceText = nil, skillDiceText = nil, modifiedDiceText = nil;

      
      m = /^(YZE)(\d+)(\+(\d+))?(\+(\d+))?/.$match(command);
      if ($truthy(m)) {
      } else {
        return ""
      };
      successDice = 0;
      matchText = m['$[]']($$($nesting, 'ABILITY_INDEX'));
      $b = self.$makeDiceRoll(matchText, successDice), $a = Opal.to_ary($b), (abilityDiceText = ($a[0] == null ? nil : $a[0])), (successDice = ($a[1] == null ? nil : $a[1])), $b;
      diceCountText = "" + "(" + (matchText) + "D6)";
      diceText = abilityDiceText;
      matchText = m['$[]']($$($nesting, 'SKILL_INDEX'));
      if ($truthy(matchText)) {
        
        $b = self.$makeDiceRoll(matchText, successDice), $a = Opal.to_ary($b), (skillDiceText = ($a[0] == null ? nil : $a[0])), (successDice = ($a[1] == null ? nil : $a[1])), $b;
        diceCountText = $rb_plus(diceCountText, "" + "+(" + (matchText) + "D6)");
        diceText = $rb_plus(diceText, "" + "+" + (skillDiceText));};
      matchText = m['$[]']($$($nesting, 'MODIFIED_INDEX'));
      if ($truthy(matchText)) {
        
        $b = self.$makeDiceRoll(matchText, successDice), $a = Opal.to_ary($b), (modifiedDiceText = ($a[0] == null ? nil : $a[0])), (successDice = ($a[1] == null ? nil : $a[1])), $b;
        diceCountText = $rb_plus(diceCountText, "" + "+(" + (matchText) + "D6)");
        diceText = $rb_plus(diceText, "" + "+" + (modifiedDiceText));};
      return "" + (diceCountText) + " \uFF1E " + (diceText) + " \u6210\u529F\u6570:" + (successDice);
    }, $YearZeroEngine_rollDiceCommand$1.$$arity = 1);
    return (Opal.def(self, '$makeDiceRoll', $YearZeroEngine_makeDiceRoll$2 = function $$makeDiceRoll(matchText, successDice) {
      var $a, $b, $$3, self = this, dice = nil, _ = nil, diceText = nil;

      
      dice = matchText.$to_i();
      $b = self.$roll(dice, 6), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      $send(diceText.$split(","), 'each', [], ($$3 = function(takeDice){var self = $$3.$$s || this;

      
        
        if (takeDice == null) {
          takeDice = nil;
        };
        if (takeDice['$==']("6")) {
          return (successDice = $rb_plus(successDice, 1))
        } else {
          return nil
        };}, $$3.$$s = self, $$3.$$arity = 1, $$3));
      return ["" + "[" + (diceText) + "]", successDice];
    }, $YearZeroEngine_makeDiceRoll$2.$$arity = 2), nil) && 'makeDiceRoll';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
