//applet
import java.awt.*;
import java.applet.*;
import java.awt.event.*;


public class awtCounter extends Frame implements ActionListener {
    private int counter = 0;
    private Label countLabel;
    private TextField countTextField;
    private Button countButton;

    public void Counter() {
        countLabel = new Label("Counter");
        countTextField = new TextField("0", 10);
        countTextField.setEditable(false);
        countButton=new Button("Count");
        countButton.addActionListener(this);

        add(countLabel);
        add(countTextField);
        add(countButton);

        setTitle("Counter");
        setSize(250,100);
        setVisible(true);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                dispose();
            }
        });
    }

    public void actionPerformed(ActionEvent e) {
        if(e.getSource()==countButton) {
            counter++;
            countTextField.setText(Integer.toString(counter));
        }
    }
    public static void main(String[] args) {
        new awtCounter();
    }
}
