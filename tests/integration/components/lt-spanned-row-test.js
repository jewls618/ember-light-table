import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lt-spanned-row', 'Integration | Component | lt spanned row', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lt-spanned-row}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#lt-spanned-row}}
      template block text
    {{/lt-spanned-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('visiblity', function(assert) {
  this.set('visible', true);

  this.render(hbs`
    {{#lt-spanned-row visible=visible}}
      template block text
    {{/lt-spanned-row}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');

  this.set('visible', false);
  assert.equal(this.$().text().trim(), '');
});

test('colspan', function(assert) {
  this.render(hbs`
    {{#lt-spanned-row colspan=4}}
      template block text
    {{/lt-spanned-row}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('td').attr('colspan'), 4);
});

test('yield', function(assert) {

  this.render(hbs`
    {{#lt-spanned-row yield=(hash name="Offir") as |row|}}
      {{row.name}}
    {{/lt-spanned-row}}
  `);
  assert.equal(this.$().text().trim(), 'Offir');
});
