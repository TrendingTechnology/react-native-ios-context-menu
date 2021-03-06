import React from 'react';
import { StyleSheet } from 'react-native';

import { ExampleContextMenuItem } from '../ExampleContextMenuItem';


export class ContextMenuViewSimpleExample03 extends React.PureComponent {
  render(){
    return(
      <ExampleContextMenuItem
        {...this.props}
        title={'Simple Example #3'}
        subtitle={'submenu'}
        desc={"Context menu with 1 action and 1 submenu (with 3 submenu actions)"}
        // `ContextMenuView` Props
        onPressMenuItem={({nativeEvent}) => alert(`onPressMenuItem nativeEvent: ${JSON.stringify(nativeEvent)}`)}
        onPressMenuPreview={() => alert('onPressMenuPreview')}
        menuConfig={{
          menuTitle: 'ContextMenuViewSimpleExample03',
          menuItems: [{
            actionKey  : 'key-01',
            actionTitle: 'Action #1',
            icon: {
              iconType : 'SYSTEM',
              iconValue: 'folder',
            }
          }, {
            menuTitle: 'Submenu...',
            menuItems: [{
              actionKey  : 'key-01-01',
              actionTitle: 'Submenu Action #1',
              icon: {
                iconType : 'SYSTEM',
                iconValue: 'star',
              }
            }, {
              actionKey  : 'key-01-02',
              actionTitle: 'Submenu Action #2',
              icon: {
                iconType : 'SYSTEM',
                iconValue: 'star.lefthalf.fill',
              }
            }, {
              actionKey  : 'key-01-03',
              actionTitle: 'Submenu Action #3',
              icon: {
                iconType : 'SYSTEM',
                iconValue: 'star.fill',
              }
            }]
          }],
        }}
      />
    );
  };
};

const styles = StyleSheet.create({
});