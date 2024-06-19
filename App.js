import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use any icon library you prefer

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={20} />
        <Text style={styles.headerText}>Paid Successfully</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amount}>₹8</Text>
        <Text style={styles.amountText}>Rupees Eight Only</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.splitButton}>
            <Text style={styles.buttonText}>Split this Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagButton}>
            <Text style={styles.buttonText}>Add Tag</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ticketContainer}>
        <Text style={styles.ticketTitle}>For</Text>
        <View style={styles.ticketDetails}>
          <Text style={styles.ticketText}>
            Surat Sitilink - 1 Ticket from Pal R.T.O. Brts to Magdalla 't'
            Junction Brts
          </Text>
          <Image
            style={styles.logo}
            source={{uri: 'https://example.com/logo.png'}}
          />
        </View>
        <TouchableOpacity style={styles.viewTicketsButton}>
          <Text style={styles.linkText}>View Tickets</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.senderContainer}>
        <Text style={styles.senderTitle}>From</Text>
        <View style={styles.senderDetails}>
          <Text style={styles.senderText}>Amitaben Kamleshbhai Gandhi</Text>
          <View style={styles.senderInitials}>
            <Text style={styles.senderInitialsText}>AG</Text>
          </View>
        </View>
        <Text style={styles.upiText}>UPI Lite</Text>
        <TouchableOpacity style={styles.viewUPIButton}>
          <Text style={styles.linkText}>View UPI Lite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  linkText: {
    color: '#007BFF',
    marginHorizontal: 8,
  },
  amountContainer: {
    marginVertical: 16,
    alignItems: 'center',
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
  amountText: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  splitButton: {
    backgroundColor: '#E0F7FA',
    padding: 8,
    marginRight: 8,
    borderRadius: 4,
  },
  tagButton: {
    backgroundColor: '#E0F7FA',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#000',
  },
  ticketContainer: {
    marginVertical: 16,
  },
  ticketTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ticketDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ticketText: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  logo: {
    width: 50,
    height: 50,
  },
  viewTicketsButton: {
    marginTop: 8,
  },
  senderContainer: {
    marginVertical: 16,
  },
  senderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  senderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  senderText: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  senderInitials: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  senderInitialsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  upiText: {
    fontSize: 14,
    color: '#000',
    marginVertical: 8,
  },
  viewUPIButton: {
    marginTop: 8,
  },
});

export default App;
